
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    SERVICE_QUOTE_OPTIONS, 
    COUNTRIES,
    TIMEZONE_OPTIONS,
    HOW_HEARD_OPTIONS
} from '../constants';

// --- Reusable Form Components & Icons ---

const FormSection: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
    <div className={`space-y-6 ${className}`}>
        <h2 className="text-2xl font-bold text-dark border-b-2 border-primary/20 pb-2">{title}</h2>
        {children}
    </div>
);

const InputField: React.FC<{ id: string; name: string; label: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string; required?: boolean; icon?: React.ReactNode }> = 
({ id, name, label, type = "text", value, onChange, placeholder, required = false, icon }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">{icon}</span>}
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className={`block w-full ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm`}
            />
        </div>
    </div>
);

const SelectField: React.FC<{ id: string; name: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; required?: boolean; icon?: React.ReactNode; children: React.ReactNode }> =
({ id, name, label, value, onChange, required=false, icon, children }) => (
     <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">{icon}</span>}
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className={`block w-full ${icon ? 'pl-10' : 'pl-3'} pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm`}
            >
                {children}
            </select>
        </div>
    </div>
);

const TextAreaField: React.FC<{ id: string; name: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; rows?: number; required?: boolean; }> =
({ id, name, label, value, onChange, rows = 4, required = false }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <textarea id={id} name={name} value={value} onChange={onChange} rows={rows} required={required} className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"></textarea>
    </div>
);

const InfoItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="flex">
        <div className="flex-shrink-0 mr-4 mt-1 text-accent">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-dark">{title}</h3>
            <div className="text-gray-600">{children}</div>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: 'United States',
        projectTitle: '',
        summary: '',
        timeline: '',
        budget: '',
        preferredLanguage: '',
        contactMethod: 'Email',
        meetingDate: '',
        timeSlot: '',
        timezone: '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi',
        howHeard: '',
        comments: '',
        consent: false,
    });
    
    const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
    const [techPrefsOpen, setTechPrefsOpen] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState(false);
    
    // State for conditional form sections
    const [isProjectQuery, setIsProjectQuery] = useState<'yes' | 'no'>('no');
    const [wantsToMeet, setWantsToMeet] = useState<'yes' | 'no'>('no');


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
             setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
        } else {
             setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleServiceToggle = (service: string) => {
        const newSelection = new Set(selectedServices);
        if (newSelection.has(service)) {
            newSelection.delete(service);
        } else {
            newSelection.add(service);
        }
        setSelectedServices(newSelection);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };
    
    const handleDragEvents = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragging(true);
        } else if (e.type === 'dragleave') {
            setDragging(false);
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedServices.size === 0) {
            alert('Please select at least one service.');
            return;
        }
        console.log({ ...formData, services: Array.from(selectedServices), file: file?.name });
        setSubmitted(true);
    };

    return (
        <div className="animate-fade-in-up -mt-20">
            <header
                className="relative text-white flex items-center justify-center text-center overflow-hidden pt-32 pb-20"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556742212-5b321f3c261b?q=80&w=1920&auto=format&fit=crop')` }}
                />
                <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm -z-10"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold">Get a Custom Quote or Schedule a Meeting</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Tell us about your project or book a quick call with our team.
                    </p>
                </div>
            </header>
            
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* --- Contact Information Panel --- */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 rounded-lg shadow-xl h-full">
                                <h2 className="text-3xl font-bold text-dark mb-6">Contact Information</h2>
                                <p className="text-gray-600 mb-8">
                                    Have a question or want to discuss your project? Reach out to us directly through any of the channels below.
                                </p>
                                <div className="space-y-6">
                                    <InfoItem
                                        title="Address"
                                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}
                                    >
                                        A-171, Defence Enclave, Kankarkhera, Meerut, Uttar Pradesh 250001, IN
                                    </InfoItem>
                                     <InfoItem
                                        title="Email Us"
                                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>}
                                    >
                                        <a href="mailto:deepanshu.yadav@jiffysoftwares.net" className="hover:text-accent transition-colors">deepanshu.yadav@jiffysoftwares.net</a><br />
                                        <a href="mailto:rishi@jiffysoftwares.in" className="hover:text-accent transition-colors">rishi@jiffysoftwares.in</a>
                                    </InfoItem>
                                    <InfoItem
                                        title="Call Us"
                                        icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>}
                                    >
                                        <a href="tel:7300942165" className="hover:text-accent transition-colors">7300942165</a><br />
                                        <a href="tel:7668276355" className="hover:text-accent transition-colors">7668276355</a>
                                    </InfoItem>
                                </div>
                            </div>
                        </div>

                        {/* --- Form --- */}
                        <div className="lg:col-span-3">
                             {submitted ? (
                                <div className="bg-white p-12 rounded-lg shadow-xl text-center h-full flex flex-col justify-center">
                                    <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <h2 className="text-3xl font-bold text-dark mt-4">Thank You!</h2>
                                    <p className="text-gray-600 mt-2">Our team will contact you soon to confirm your meeting.</p>
                                    <Link to="/" className="mt-8 inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary transition-colors">
                                        Back to Home
                                    </Link>
                                </div>
                            ) : (
                            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-lg shadow-xl space-y-12">
                                
                                <FormSection title="Basic Information">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField id="fullName" name="fullName" label="Full Name" value={formData.fullName} onChange={handleChange} required />
                                        <InputField id="companyName" name="companyName" label="Company / Organization Name" value={formData.companyName} onChange={handleChange} />
                                        <InputField id="email" name="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} required />
                                        <InputField id="phone" name="phone" label="Phone / WhatsApp Number" value={formData.phone} onChange={handleChange} />
                                        <SelectField id="country" name="country" label="Country / Location" value={formData.country} onChange={handleChange}>
                                            {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                                        </SelectField>
                                    </div>
                                </FormSection>

                                <FormSection title="Which services are you interested in? (Required)">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {SERVICE_QUOTE_OPTIONS.map(service => (
                                            <label key={service} className="flex items-center space-x-3 cursor-pointer p-2 rounded-md hover:bg-light transition-colors">
                                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent" checked={selectedServices.has(service)} onChange={() => handleServiceToggle(service)} />
                                                <span className="text-sm text-gray-700">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </FormSection>

                                <FormSection title="Inquiry Type">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Is your inquiry related to a specific project?</label>
                                        <div className="flex items-center space-x-6">
                                            <label className="flex items-center cursor-pointer">
                                                <input type="radio" name="isProjectQuery" value="yes" checked={isProjectQuery === 'yes'} onChange={(e) => setIsProjectQuery(e.target.value as 'yes' | 'no')} className="h-4 w-4 text-accent focus:ring-accent" />
                                                <span className="ml-2 text-sm">Yes</span>
                                            </label>
                                            <label className="flex items-center cursor-pointer">
                                                <input type="radio" name="isProjectQuery" value="no" checked={isProjectQuery === 'no'} onChange={(e) => setIsProjectQuery(e.target.value as 'yes' | 'no')} className="h-4 w-4 text-accent focus:ring-accent" />
                                                <span className="ml-2 text-sm">No</span>
                                            </label>
                                        </div>
                                    </div>
                                </FormSection>

                                {isProjectQuery === 'yes' && (
                                     <div className="animate-fade-in space-y-12">
                                        <FormSection title="Project Details">
                                            <InputField id="projectTitle" name="projectTitle" label="Project Title" value={formData.projectTitle} onChange={handleChange} required={isProjectQuery === 'yes'} />
                                            <TextAreaField id="summary" name="summary" label="Requirement Summary" value={formData.summary} onChange={handleChange} required={isProjectQuery === 'yes'} />
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <SelectField id="timeline" name="timeline" label="Expected Timeline" value={formData.timeline} onChange={handleChange}>
                                                     <option value="">Select Timeline...</option>
                                                    <option>Within 1 Month</option><option>1-3 Months</option><option>3-6 Months</option><option>6+ Months</option>
                                                </SelectField>
                                                <InputField id="budget" name="budget" label="Budget Range (USD)" value={formData.budget} onChange={handleChange} placeholder="e.g., $10,000 - $25,000" />
                                            </div>
                                        </FormSection>
                                        
                                        <FormSection title="File Upload (Optional)">
                                            <div
                                                onDragEnter={handleDragEvents} onDragOver={handleDragEvents} onDragLeave={handleDragEvents} onDrop={handleDrop}
                                                className={`relative block w-full border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${dragging ? 'border-accent bg-accent/10' : 'border-gray-300 bg-light/50 hover:border-gray-400'}`}
                                            >
                                                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" onChange={handleFileChange} />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                                                <p className="mt-2 text-sm text-gray-600">
                                                    <span className="font-semibold text-accent">Click to upload</span> or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-500">RFP, Project Document, Screenshot, etc.</p>
                                                {file && <p className="text-sm text-green-600 mt-2 font-semibold">File selected: {file.name}</p>}
                                            </div>
                                        </FormSection>

                                        <div>
                                            <button type="button" onClick={() => setTechPrefsOpen(!techPrefsOpen)} className="flex justify-between items-center w-full">
                                                <h2 className="text-2xl font-bold text-dark">Technical Preferences (Optional)</h2>
                                                <svg className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${techPrefsOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </button>
                                            {techPrefsOpen && (
                                                <div className="mt-6 animate-fade-in">
                                                    <InputField 
                                                        id="preferredLanguage" 
                                                        name="preferredLanguage" 
                                                        label="Preferred Programming Language / Technology" 
                                                        value={formData.preferredLanguage} 
                                                        onChange={handleChange} 
                                                        placeholder="e.g., Python, React, Java..."
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <FormSection title="Schedule a Meeting">
                                     <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Would you like to schedule a meeting with us?</label>
                                        <div className="flex items-center space-x-6">
                                            <label className="flex items-center cursor-pointer">
                                                <input type="radio" name="wantsToMeet" value="yes" checked={wantsToMeet === 'yes'} onChange={(e) => setWantsToMeet(e.target.value as 'yes' | 'no')} className="h-4 w-4 text-accent focus:ring-accent" />
                                                <span className="ml-2 text-sm">Yes, let's schedule</span>
                                            </label>
                                            <label className="flex items-center cursor-pointer">
                                                <input type="radio" name="wantsToMeet" value="no" checked={wantsToMeet === 'no'} onChange={(e) => setWantsToMeet(e.target.value as 'yes' | 'no')} className="h-4 w-4 text-accent focus:ring-accent" />
                                                <span className="ml-2 text-sm">No, not right now</span>
                                            </label>
                                        </div>
                                    </div>
                                </FormSection>
                                
                                {wantsToMeet === 'yes' && (
                                     <FormSection title="Meeting Availability" className="animate-fade-in">
                                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                             <SelectField id="contactMethod" name="contactMethod" label="Preferred Contact Method" value={formData.contactMethod} onChange={handleChange}>
                                                <option>Email</option><option>Call</option><option>WhatsApp</option>
                                            </SelectField>
                                            <InputField id="meetingDate" name="meetingDate" label="Preferred Date" type="date" value={formData.meetingDate} onChange={handleChange} />
                                            <InputField id="timeSlot" name="timeSlot" label="Preferred Time" type="time" value={formData.timeSlot} onChange={handleChange} />
                                             <SelectField id="timezone" name="timezone" label="Timezone" value={formData.timezone} onChange={handleChange}>
                                                {TIMEZONE_OPTIONS.map(tz => <option key={tz} value={tz}>{tz}</option>)}
                                            </SelectField>
                                         </div>
                                     </FormSection>
                                )}
                                
                                <FormSection title="Additional Info">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                         <SelectField id="howHeard" name="howHeard" label="How did you hear about us?" value={formData.howHeard} onChange={handleChange} required>
                                             <option value="">Select an option...</option>
                                             {HOW_HEARD_OPTIONS.map(h => <option key={h} value={h}>{h}</option>)}
                                        </SelectField>
                                        <TextAreaField id="comments" name="comments" label="Additional Comments" value={formData.comments} onChange={handleChange} />
                                    </div>
                                </FormSection>
                                
                                <div className="pt-6 border-t text-center">
                                     <div className="mb-6">
                                        <label className="flex items-center justify-center space-x-2 cursor-pointer">
                                            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent" />
                                            <span className="text-sm text-gray-700">
                                              I agree to the <Link to="/terms-and-conditions" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Terms</Link> & <Link to="/privacy-policy" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>.
                                            </span>
                                        </label>
                                    </div>
                                    <button type="submit" className="bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!formData.consent}>
                                        Submit & Schedule Meeting
                                    </button>
                                </div>
                            </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
