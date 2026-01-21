
import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { SERVICE_QUOTE_OPTIONS, COUNTRIES } from '../constants';

// --- Reusable Form Components & Icons ---

const FormSection: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
    <div className={`space-y-6 ${className}`}>
        <h2 className="text-2xl font-bold text-dark border-b-2 border-primary/20 pb-2">{title}</h2>
        {children}
    </div>
);

const InputField: React.FC<{ id: string; name: string; label: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string; required?: boolean; icon: React.ReactNode }> = 
({ id, name, label, type = "text", value, onChange, placeholder, required = false, icon }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                {icon}
            </span>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            />
        </div>
    </div>
);

const SelectField: React.FC<{ id: string; name: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; required?: boolean; icon: React.ReactNode; children: React.ReactNode }> =
({ id, name, label, value, onChange, required=false, icon, children }) => (
     <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                {icon}
            </span>
            <select
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
            >
                {children}
            </select>
        </div>
    </div>
);


const DownloadUiPage: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        country: 'United States',
        projectTitle: '',
        summary: '',
        platform: '',
        timeline: '',
        budget: '',
        techStack: '',
        integration: 'no',
        hosting: '',
        contactMethod: 'Email',
        meetingDate: '',
        timeSlot: '',
        howHeard: '',
        comments: '',
        consent: false,
    });
    const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
    const [techPrefsOpen, setTechPrefsOpen] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState(false);

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
                    <h1 className="text-4xl md:text-5xl font-bold">Get a Custom Quote</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Tell us about your project or book a quick call with our team to get started.
                    </p>
                </div>
            </header>
            
            <section className="py-20 bg-light">
                <div className="container mx-auto px-4 max-w-6xl">
                    {submitted ? (
                        <div className="bg-white p-12 rounded-lg shadow-xl text-center">
                            <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <h2 className="text-3xl font-bold text-dark mt-4">Thank You!</h2>
                            <p className="text-gray-600 mt-2">Your request has been submitted. Our team will contact you soon to confirm your meeting.</p>
                            <Link to="/" className="mt-8 inline-block bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-secondary transition-colors">
                                Back to Home
                            </Link>
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-lg shadow-xl space-y-12">
                        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-10">
                            {/* --- LEFT COLUMN --- */}
                            <div className="space-y-10">
                                <FormSection title="1. Basic Information">
                                    <InputField id="fullName" name="fullName" label="Full Name" value={formData.fullName} onChange={handleChange} required icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>} />
                                    <InputField id="companyName" name="companyName" label="Company / Organization Name" value={formData.companyName} onChange={handleChange} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>} />
                                    <InputField id="email" name="email" label="Email Address" type="email" value={formData.email} onChange={handleChange} required icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>} />
                                    <InputField id="phone" name="phone" label="Phone / WhatsApp Number" value={formData.phone} onChange={handleChange} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>} />
                                    <SelectField id="country" name="country" label="Country / Location" value={formData.country} onChange={handleChange} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>}>
                                        {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                                    </SelectField>
                                </FormSection>
                                <FormSection title="2. Service Selection">
                                    <div className="space-y-3">
                                        {SERVICE_QUOTE_OPTIONS.map(service => (
                                            <label key={service} className="flex items-center space-x-3 cursor-pointer">
                                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent" checked={selectedServices.has(service)} onChange={() => handleServiceToggle(service)} />
                                                <span className="text-sm text-gray-700">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </FormSection>
                            </div>

                             {/* --- RIGHT COLUMN --- */}
                            <div className="space-y-10">
                                <FormSection title="3. Project Details">
                                    <InputField id="projectTitle" name="projectTitle" label="Project Title" value={formData.projectTitle} onChange={handleChange} required icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213l-1.82 6.811a1 1 0 01-1.89-.06l-1.637-6.136a1 1 0 011.213-.727L9.243 3.03zM13.5 14.5a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h5.018a1 1 0 01.707.293l4 4a1 1 0 01.293.707V14.5z" clipRule="evenodd" /></svg>} />
                                    <div>
                                        <label htmlFor="summary" className="block text-sm font-medium text-gray-700 mb-1">Requirement Summary</label>
                                        <textarea id="summary" name="summary" value={formData.summary} onChange={handleChange} rows={5} required className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"></textarea>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                         <SelectField id="platform" name="platform" label="Target Platform" value={formData.platform} onChange={handleChange} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9.555 14.222a.5.5 0 01-.555-.444V6.222a.5.5 0 01.555-.444l6 4a.5.5 0 010 .888l-6 4z" clipRule="evenodd" /></svg>}>
                                            <option value="">Select Platform...</option>
                                            <option>Web</option><option>Mobile</option><option>Desktop</option><option>Cloud</option><option>API</option>
                                        </SelectField>
                                        <SelectField id="timeline" name="timeline" label="Expected Timeline" value={formData.timeline} onChange={handleChange} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>}>
                                             <option value="">Select Timeline...</option>
                                            <option>Within 1 Month</option><option>1-3 Months</option><option>3-6 Months</option><option>6+ Months</option>
                                        </SelectField>
                                    </div>
                                     <SelectField id="budget" name="budget" label="Budget Range (USD)" value={formData.budget} onChange={handleChange} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.5 2.5 0 00-1.167-.337c-1.381 0-2.5 1.119-2.5 2.5 0 .337.067.656.188.944a2.5 2.5 0 001.944 1.342A2.5 2.5 0 0010 13.5v1.698c-.22-.07-.412-.163-.567-.267C8.169 14.165 6 12.331 6 9.5 6 6.669 8.169 4.835 9.433 4.082a.5.5 0 01.567.936z" /><path d="M10 4a6 6 0 100 12 6 6 0 000-12zM3 9.5a7 7 0 1114 0 7 7 0 01-14 0z" /></svg>}>
                                        <option value="">Select Budget...</option>
                                        <option>$5k - $10k</option><option>$10k - $25k</option><option>$25k - $50k</option><option>$50k+</option>
                                    </SelectField>
                                </FormSection>
                                
                                <FormSection title="4. File Upload (Optional)">
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
                            </div>
                        </div>

                         {/* --- FULL WIDTH SECTIONS --- */}
                        <div className="space-y-12 pt-10 border-t mt-10">
                             <FormSection title="5. Meeting & Availability">
                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                     <SelectField id="contactMethod" name="contactMethod" label="Preferred Contact Method" value={formData.contactMethod} onChange={handleChange} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>}>
                                        <option>Email</option><option>Call</option><option>WhatsApp</option><option>Video Meeting</option>
                                    </SelectField>
                                    <InputField id="meetingDate" name="meetingDate" label="Preferred Date" type="date" value={formData.meetingDate} onChange={handleChange} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>} />
                                    <SelectField id="timeSlot" name="timeSlot" label="Preferred Time Slot" value={formData.timeSlot} onChange={handleChange} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>}>
                                        <option value="">Select Time...</option>
                                        <option>Morning (9am-12pm)</option><option>Afternoon (1pm-5pm)</option><option>Evening (5pm-8pm)</option><option>Schedule Later</option>
                                    </SelectField>
                                 </div>
                             </FormSection>
                            
                             <div className="text-center">
                                 <div className="mb-6">
                                    <label className="flex items-center justify-center space-x-2 cursor-pointer">
                                        <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required className="h-4 w-4 rounded border-gray-300 text-accent focus:ring-accent" />
                                        <span className="text-sm text-gray-700">I agree to the <a href="#" className="text-accent hover:underline">Terms & Privacy Policy</a>.</span>
                                    </label>
                                </div>
                                <button type="submit" className="bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!formData.consent}>
                                    Submit & Schedule Meeting
                                </button>
                            </div>
                        </div>
                    </form>
                    )}
                </div>
            </section>
        </div>
    );
};

export default DownloadUiPage;
