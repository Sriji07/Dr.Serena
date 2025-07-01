'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function BookSessionPage() {
    const [agree, setAgree] = useState(false);

    return (
        <main className="min-h-screen bg-[#a9d5f9d3] flex items-center justify-center px-4 py-20 font-[var(--font-geist-sans)]">
            <div className="max-w-xl w-full bg-white rounded-3xl p-10 shadow-2xl border border-blue-100">
                <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center font-[var(--font-lora)] tracking-tight">
                    Book a Session
                </h1>

                <form className="space-y-6">
                    {/* Full Name */}
                    <div>
                        <label className="block text-blue-900 font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            className="w-full border border-blue-200 rounded-xl px-4 py-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Your name"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-blue-900 font-medium mb-1">Phone</label>
                        <input
                            type="tel"
                            required
                            className="w-full border border-blue-200 rounded-xl px-4 py-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="(123) 456-7890"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-blue-900 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            required
                            className="w-full border border-blue-200 rounded-xl px-4 py-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Reason */}
                    <div>
                        <label className="block text-blue-900 font-medium mb-1">What brings you here?</label>
                        <textarea
                            rows={4}
                            required
                            className="w-full border border-blue-200 rounded-xl px-4 py-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="Tell us briefly..."
                        />
                    </div>

                    {/* Preferred Time */}
                    <div>
                        <label className="block text-blue-900 font-medium mb-1">Preferred time to reach you</label>
                        <input
                            type="text"
                            className="w-full border border-blue-200 rounded-xl px-4 py-2 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300"
                            placeholder="e.g., Weekdays after 3PM"
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            id="agree"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            className="mt-1 accent-blue-600"
                            required
                        />
                        <label htmlFor="agree" className="text-blue-800 text-sm">
                            I agree to be contacted regarding my inquiry.
                        </label>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>

                <div className="mt-6 text-center">
                    <Link href="/" className="text-blue-500 hover:underline text-sm">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
