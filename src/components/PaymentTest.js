import React, { useState } from "react";

const PaymentTest = () => {
  const [status, setStatus] = useState("");
  const [qrCode, setQrCode] = useState(null);
  const [manualCode, setManualCode] = useState("");
  const [paymentId, setPaymentId] = useState("");

  const getAccessToken = async () => {
    setStatus("Requesting access token...");
    const formData = new URLSearchParams();
    formData.append("grant_type", "client_credentials");
    formData.append("client_id", "alsanaya-alarabia");
    formData.append("client_secret", "48d259a1-c18c-4200-89e1-b8642edc1075");

    const res = await fetch(
      "https://fib.stage.fib.iq/auth/realms/fib-online-shop/protocol/openid-connect/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to get access token");
    }

    const data = await res.json();
    return data.access_token;
  };

  const createPayment = async () => {
    try {
      const token = await getAccessToken();
      setStatus("Creating payment...");

      const res = await fetch("https://fib.stage.fib.iq/protected/v1/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          monetaryValue: {
            amount: "25000",
            currency: "IQD",
          },
          statusCallbackUrl: "https://sanayatechs.com/fib-status", // Optional
          description: "Test payment from Al-Sanaya site",
          expiresIn: "PT30M", // 30 minutes
          category: "ECOMMERCE",
          refundableFor: "PT48H",
        }),
      });

      if (!res.ok) throw new Error("Failed to create payment");

      const result = await res.json();
      setQrCode(result.qrCode);
      setManualCode(result.readableCode);
      setPaymentId(result.paymentId);
      setStatus("Payment created. Scan QR or use code.");
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  const checkStatus = async () => {
    try {
      if (!paymentId) return;
      setStatus("Checking payment status...");

      const token = await getAccessToken();

      const res = await fetch(
        `https://fib.stage.fib.iq/protected/v1/payments/${paymentId}/status`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to check status");

      const data = await res.json();
      setStatus(`Status: ${data.status}`);
    } catch (err) {
      setStatus("Error: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-16 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">FIB Payment Test</h1>

      <button
        onClick={createPayment}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 mb-8"
      >
        Create Test Payment
      </button>

      {qrCode && (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <img src={qrCode} alt="QR Code" className="mx-auto w-48 h-48 mb-4" />
          <p className="text-gray-800 font-semibold">Manual Code:</p>
          <p className="text-black text-lg mb-2">{manualCode}</p>
          <button
            onClick={checkStatus}
            className="mt-4 px-5 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Check Payment Status
          </button>
        </div>
      )}

      {status && <p className="mt-8 text-lg text-gray-700">{status}</p>}
    </div>
  );
};

export default PaymentTest;
