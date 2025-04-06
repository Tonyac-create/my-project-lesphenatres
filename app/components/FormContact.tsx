'use client'

import { useContactStore } from '../store/useContactStore'
import { useState } from 'react'

export default function FormContact() {
    const { formData, setFormData, resetForm } = useContactStore()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        try {
            // Here you'll implement the Resend email sending logic later
            console.log('Form submitted:', formData)
            resetForm()
        } catch (error) {
            console.error('Error sending email:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        Prénom
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:outline-none focus:border-[#C00A32] focus:ring-1 focus:ring-[#C00A32]"
                        value={formData.firstName}
                        onChange={(e) => setFormData('firstName', e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="lastName"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:outline-none focus:border-[#C00A32] focus:ring-1 focus:ring-[#C00A32]"
                        value={formData.lastName}
                        onChange={(e) => setFormData('lastName', e.target.value)}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:outline-none focus:border-[#C00A32] focus:ring-1 focus:ring-[#C00A32]"
                    value={formData.email}
                    onChange={(e) => setFormData('email', e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Téléphone
                </label>
                <input
                    type="tel"
                    id="phone"
                    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:outline-none focus:border-[#C00A32] focus:ring-1 focus:ring-[#C00A32]"
                    value={formData.phone}
                    onChange={(e) => setFormData('phone', e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-gray-400 shadow-sm focus:outline-none focus:border-[#C00A32] focus:ring-1 focus:ring-[#C00A32]"
                    value={formData.message}
                    onChange={(e) => setFormData('message', e.target.value)}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-1/2 bg-red shadow-[0_0_10px_rgba(192,10,50,1)] hover:shadow-[0_0_20px_rgba(192,10,50,1)] focus:outline-none focus:border-[#C00A32] focus:ring-1 focus:ring-[#C00A32] hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded-md transition-colors disabled:opacity-50"
            >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
        </form>
    )
}