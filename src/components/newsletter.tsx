import { useState } from 'react';
import Spline from "@splinetool/react-spline";

const NewsletterSubscription: React.FC = () => {
    const [email, setEmail] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribed with email:', email);
        setEmail('');
    };

    return (
        <div className="flex flex-col items-center bg-blue-500 rounded-lg p-6 mt-10">
            <h2 className="text-lg font-semibold mb-2">Subscribe to our Newsletter</h2>
            <p className="text-gray-100 mb-4">Stay updated with our latest news and updates. Enter your email below:</p>
            <form onSubmit={handleSubmit} className="flex items-center">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="mr-2 px-4 py-2 border border-gray-300 rounded-md"
                    required
                />
                 
                 <Spline scene="https://prod.spline.design/GjdJx0Y3xuVkAtaZ/scene.splinecode" className="cursor-pointer" />
            
            </form>
        </div>
    );
};

export default NewsletterSubscription;
