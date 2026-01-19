import React from 'react';

const Resume = () => {
    return (
        <div className="resume-container section container">
            <h1 className="resume-title" style={{ marginTop: '100px', textAlign: 'center' }}>My Resume</h1>
            <div className="resume-content" style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-btn"
                    style={{
                        padding: '12px 24px',
                        background: 'var(--accent-primary)',
                        color: 'white',
                        borderRadius: '30px',
                        textDecoration: 'none'
                    }}
                >
                    Download Resume (PDF)
                </a>
            </div>
            {/* Placeholder for PDF embed or HTML resume */}
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>Resume preview coming soon.</p>
        </div>
    );
};

export default Resume;
