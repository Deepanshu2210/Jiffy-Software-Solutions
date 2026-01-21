import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="animate-fade-in-up -mt-20">
            <header
                className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1558522195-e1279a321747?q=80&w=1920&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-primary/80 -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Your privacy is important to us. It is JIFFY Software Solutions' policy to respect your privacy regarding any information we may collect from you.
                    </p>
                </div>
            </header>

            <section className="py-20 bg-light">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg custom-prose max-w-none">
                        <p className="text-sm text-gray-500">Effective Date: October 26, 2023</p>
                        <p className="text-sm text-gray-500">Last Updated: October 26, 2023</p>

                        <h2>1. Introduction</h2>
                        <p>Welcome to JIFFY Software Solutions (“Company”, “we”, “our”, “us”). We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, submit forms, or use our services.</p>
                        <p>By using our website or services, you agree to the practices described in this policy.</p>

                        <h2>2. Information We Collect</h2>
                        <p>We may collect the following types of information from you:</p>
                        <h3>A. Personal Information</h3>
                        <ul>
                            <li>Full Name</li>
                            <li>Company / Organization Name</li>
                            <li>Email Address</li>
                            <li>Phone / WhatsApp Number</li>
                            <li>Country / Location</li>
                            <li>Meeting Availability or Preferred Contact Time</li>
                            <li>Any details you voluntarily provide in project enquiry forms</li>
                        </ul>
                        <h3>B. Technical Information</h3>
                        <ul>
                            <li>IP Address</li>
                            <li>Browser Type & Version</li>
                            <li>Device Type</li>
                            <li>Operating System</li>
                            <li>Referring Website / URL</li>
                            <li>Pages visited and time spent on our website</li>
                        </ul>
                        <h3>C. Project / Business Information</h3>
                        <ul>
                            <li>Project requirements, specifications, or documents shared for quotation or collaboration purposes.</li>
                            <li>Business-related details required to deliver services effectively.</li>
                        </ul>
                        <h3>D. Cookies & Tracking Data</h3>
                        <p>We use cookies and similar tracking technologies to enhance user experience, analyze traffic, and understand usage patterns.</p>

                        <h2>3. How We Use Your Information</h2>
                        <p>Your data is collected and used for the following purposes:</p>
                        <ul>
                            <li>To respond to your enquiries and provide requested services.</li>
                            <li>To create and manage project proposals, quotations, and contracts.</li>
                            <li>To communicate regarding project updates, meetings, or support.</li>
                            <li>To improve our website, products, and services.</li>
                            <li>To send newsletters, promotional updates, or surveys (only if you’ve opted in).</li>
                            <li>To comply with legal obligations and resolve disputes.</li>
                        </ul>

                        <h2>4. How We Share Information</h2>
                        <p>We do not sell or rent your personal data to any third party. However, we may share your data in the following limited circumstances:</p>
                        <ul>
                            <li>With employees or partners involved in delivering your project.</li>
                            <li>With trusted third-party service providers (e.g., hosting, payment gateways, cloud tools) under confidentiality agreements.</li>
                            <li>When required by law, court order, or government regulation.</li>
                        </ul>
                        <p>All third-party partners are obligated to handle your data securely and use it only for authorized purposes.</p>

                        <h2>5. Data Retention</h2>
                        <p>We retain your personal and project-related information only as long as necessary to:</p>
                        <ul>
                            <li>Fulfill the purposes for which it was collected, or</li>
                            <li>Comply with legal, tax, or accounting requirements.</li>
                        </ul>
                        <p>Once the retention period expires, your data is securely deleted or anonymized.</p>

                        <h2>6. Data Security</h2>
                        <p>We implement appropriate technical and organizational measures to protect your data, including:</p>
                        <ul>
                            <li>Encrypted data storage and transmission (SSL/TLS).</li>
                            <li>Access control and authentication mechanisms.</li>
                            <li>Regular security reviews and audits.</li>
                        </ul>
                        <p>However, no method of online data transfer is 100% secure. You acknowledge that you share information at your own risk.</p>

                        <h2>7. Your Data Protection Rights</h2>
                        <p>Depending on your jurisdiction, you may have the right to:</p>
                        <ul>
                            <li>Access, correct, or update your personal data.</li>
                            <li>Request deletion of your data (“Right to be Forgotten”).</li>
                            <li>Withdraw consent for marketing communications.</li>
                            <li>Request a copy of your data in a portable format.</li>
                        </ul>
                        <p>To exercise any of these rights, please contact us at <a href="mailto:deepanshu.yadav@jiffysoftwares.net">deepanshu.yadav@jiffysoftwares.net</a>.</p>

                        <h2>8. Cookies Policy</h2>
                        <p>Our website uses cookies to:</p>
                        <ul>
                            <li>Remember your preferences</li>
                            <li>Track traffic sources and user behavior (via Google Analytics or similar tools)</li>
                            <li>Personalize user experience</li>
                        </ul>
                        <p>You can disable cookies through your browser settings, but some website features may not function properly without them.</p>

                        <h2>9. Third-Party Links</h2>
                        <p>Our website may contain links to external sites. We are not responsible for the privacy practices or content of those third-party websites. We recommend reviewing their privacy policies before submitting any personal data.</p>

                        <h2>10. Children’s Privacy</h2>
                        <p>Our services are not directed toward children under 16 years of age. We do not knowingly collect personal data from minors. If you believe a child has provided us their data, please contact us for immediate deletion.</p>

                        <h2>11. International Data Transfers</h2>
                        <p>If you are located outside India and use our services, please note that your information may be transferred to and processed in India or other locations where we operate. We ensure that such transfers are made with adequate protection standards.</p>

                        <h2>12. Policy Updates</h2>
                        <p>We may update this Privacy Policy periodically. The updated version will always be posted on our website with the revised date. Your continued use of our website or services constitutes acceptance of the updated policy.</p>

                        <h2>13. Contact Us</h2>
                        <p>If you have questions or concerns regarding this Privacy Policy or how we handle your data, please contact us:</p>
                         <ul>
                            <li><strong>Email:</strong> <a href="mailto:deepanshu.yadav@jiffysoftwares.net">deepanshu.yadav@jiffysoftwares.net</a> / <a href="mailto:rishi@jiffysoftwares.in">rishi@jiffysoftwares.in</a></li>
                            <li><strong>Phone:</strong> <a href="tel:7300942165">7300942165</a> / <a href="tel:7668276355">7668276355</a></li>
                            <li><strong>Website:</strong> <a href="https://www.jiffysoftwares.net" target="_blank" rel="noopener noreferrer">www.jiffysoftwares.net</a></li>
                            <li><strong>Address:</strong> A-171, Defence Enclave, Kankarkhera, Meerut, Uttar Pradesh 250001, IN</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicyPage;
