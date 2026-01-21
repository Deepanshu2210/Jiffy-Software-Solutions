import React from 'react';

const TermsAndConditionsPage: React.FC = () => {
    return (
        <div className="animate-fade-in-up -mt-20">
            <header
                className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1920&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-primary/80 -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Terms and Conditions</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Please read these terms and conditions carefully before using Our Service.
                    </p>
                </div>
            </header>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg custom-prose max-w-none">
                        <p className="text-sm text-gray-500">Last Updated: October 26, 2023</p>
                        <p className="text-sm text-gray-500">Effective From: October 26, 2023</p>

                        <h2>1. Introduction</h2>
                        <p>Welcome to JIFFY Software Solutions (“Company”, “we”, “our”, or “us”).</p>
                        <p>These Terms and Conditions (“Terms”) govern your use of our website, services, and any related software, platform, or products (collectively, “Services”).</p>
                        <p>By using our Services or entering into a project with us, you (“Client”, “you”, or “your”) agree to be bound by these Terms.</p>

                        <h2>2. Services Offered</h2>
                        <p>We provide various IT and digital solutions, including but not limited to:</p>
                        <ul>
                            <li>Custom Software Development</li>
                            <li>Website & Mobile App Development</li>
                            <li>CRM & API Development</li>
                            <li>AI & Data Analytics Solutions</li>
                            <li>Cloud & DevOps Services</li>
                            <li>Enterprise Communication Platforms (IVR, SMS, WhatsApp, etc.)</li>
                            <li>Digital Service Platform Solutions</li>
                        </ul>
                        <p>The scope, timelines, and deliverables for any project will be clearly defined in the Project Proposal / Agreement / Statement of Work (SOW).</p>

                        <h2>3. Project Commencement</h2>
                        <p>A project will begin only after:</p>
                        <ul>
                            <li>Mutual agreement on project scope, cost, and timeline.</li>
                            <li>Receipt of an initial payment or advance as per the agreed terms.</li>
                            <li>Written confirmation (email or signed proposal) from the client.</li>
                        </ul>

                        <h2>4. Payments and Invoices</h2>
                        <ul>
                            <li>All payments must be made as per the agreed milestone schedule.</li>
                            <li>Invoices are payable within 15 days from the date of issue.</li>
                            <li>Delay in payment may result in suspension of ongoing work.</li>
                            <li>All quoted prices are exclusive of applicable taxes, unless stated otherwise.</li>
                            <li>Once work has started, advance payments are non-refundable.</li>
                        </ul>

                        <h2>5. Intellectual Property Rights</h2>
                        <ul>
                            <li>Upon full payment, all intellectual property (IP) rights of the final deliverables are transferred to the client, unless otherwise agreed.</li>
                            <li>All pre-existing tools, code libraries, frameworks, or templates developed by the company remain our proprietary assets.</li>
                            <li>The company reserves the right to showcase completed work in its portfolio, unless the client requests confidentiality in writing.</li>
                        </ul>

                        <h2>6. Client Responsibilities</h2>
                        <ul>
                            <li>The client must provide complete, accurate, and timely information, feedback, and approvals required for the project.</li>
                            <li>The company shall not be responsible for delays caused due to late client feedback or lack of information.</li>
                            <li>The client agrees not to misuse or redistribute our proprietary tools, code, or licensed material.</li>
                        </ul>

                        <h2>7. Confidentiality</h2>
                        <p>Both parties agree to maintain strict confidentiality regarding all non-public business, technical, and financial information shared during the course of the project. Neither party shall disclose any confidential information without prior written consent, except as required by law.</p>

                        <h2>8. Revisions and Changes</h2>
                        <ul>
                            <li>Minor revisions are included as per the proposal.</li>
                            <li>Major scope changes or new features requested after project start may incur additional costs and timeline adjustments.</li>
                            <li>All changes must be documented and approved through a Change Request Form (CRF) or written agreement.</li>
                        </ul>

                        <h2>9. Third-Party Services</h2>
                        <p>If the project involves third-party APIs, software, hosting, or integrations:</p>
                        <ul>
                            <li>We are not responsible for downtime, security, or failures caused by third-party systems.</li>
                            <li>The client is responsible for maintaining valid subscriptions or licenses for third-party tools unless specified otherwise.</li>
                        </ul>

                        <h2>10. Warranties and Support</h2>
                        <ul>
                            <li>We warrant that delivered software will substantially perform as described in the agreed specifications.</li>
                            <li>Post-delivery support is provided as per the Maintenance Agreement or Warranty Period stated in the proposal.</li>
                            <li>Beyond the warranty period, maintenance or bug fixes are billed separately.</li>
                        </ul>

                        <h2>11. Limitation of Liability</h2>
                        <ul>
                            <li>The company shall not be liable for any indirect, incidental, special, or consequential damages.</li>
                            <li>Our total liability shall not exceed the total fees paid by the client for the specific project.</li>
                        </ul>

                        <h2>12. Termination</h2>
                        <p>Either party may terminate the agreement if:</p>
                        <ul>
                            <li>The other party breaches any material term of the agreement and fails to remedy it within 15 days of written notice.</li>
                            <li>The client fails to make payments on time.</li>
                        </ul>
                        <p>Upon termination, the client must pay for all completed work and expenses incurred up to the termination date.</p>

                        <h2>13. Data Privacy</h2>
                        <p>We respect your privacy and handle all client data in accordance with our Privacy Policy. We do not share client data with third parties without explicit consent.</p>

                        <h2>14. Governing Law & Jurisdiction</h2>
                        <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Meerut, Uttar Pradesh.</p>

                        <h2>15. Modifications</h2>
                        <p>We may update these Terms & Conditions from time to time. Updated versions will be posted on our website with the revised date. Continued use of our Services implies acceptance of the updated Terms.</p>

                        <h2>16. Contact Us</h2>
                        <p>If you have any questions regarding these Terms, please contact us:</p>
                        <ul>
                            <li><strong>Email:</strong> <a href="mailto:deepanshu.yadav@jiffysoftwares.net">deepanshu.yadav@jiffysoftwares.net</a> / <a href="mailto:rishi@jiffysoftwares.in">rishi@jiffysoftwares.in</a></li>
                            <li><strong>Phone:</strong> <a href="tel:7300942165">7300942165</a> / <a href="tel:7668276355">7668276355</a></li>
                            <li><strong>Website:</strong> <a href="https://www.jiffysoftwares.net" target="_blank" rel="noopener noreferrer">www.jiffysoftwares.net</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsAndConditionsPage;