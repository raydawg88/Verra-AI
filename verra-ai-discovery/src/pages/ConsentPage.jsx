import { useState } from 'react'
import './ConsentPage.css'

export default function ConsentPage({ onAccept, onDecline }) {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [showTermsModal, setShowTermsModal] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const handleAccept = () => {
    if (isAuthorized) {
      onAccept()
    }
  }

  const showTerms = (e) => {
    e.preventDefault()
    setShowTermsModal(true)
  }

  const showPrivacy = (e) => {
    e.preventDefault()
    setShowPrivacyModal(true)
  }

  const closeModals = () => {
    setShowTermsModal(false)
    setShowPrivacyModal(false)
  }

  return (
    <div className="ai-consent-page">
      {/* Verra Header */}
      <div className="page-header">
        <div className="header-content">
          <img
            src="https://www.verramobility.com/wp-content/uploads/2022/06/verra_logo_notagline.png"
            alt="Verra Mobility"
            className="header-logo"
          />
          <button className="btn-close" onClick={onDecline}>
            <span className="close-text">Close</span>
            <span className="material-icons">close</span>
          </button>
        </div>
      </div>

      <div className="consent-container">
        {/* Simple Consent Content */}
        <div className="simple-consent">
          <h1 className="consent-title">Almost There! Just Need Your OK</h1>
          <p className="consent-subtitle">You're 30 seconds away from AI insights</p>

          <div className="permission-box-simple">
            <h2 className="permission-heading">What We Need Permission For:</h2>
            <ul className="permission-list">
              <li>
                <span className="material-icons">description</span>
                <div>
                  <strong>Read your toll and violation data</strong>
                  <span>Access transaction history to identify patterns</span>
                </div>
              </li>
              <li>
                <span className="material-icons">analytics</span>
                <div>
                  <strong>Process patterns to find issues</strong>
                  <span>Compare against 40,000+ fleets to detect anomalies</span>
                </div>
              </li>
              <li>
                <span className="material-icons">lightbulb</span>
                <div>
                  <strong>Generate recommendations</strong>
                  <span>Provide actionable insights to reduce costs</span>
                </div>
              </li>
            </ul>

            <div className="guarantees">
              <div className="guarantee-item">
                <span className="material-icons">check_circle</span>
                <span>Your data stays in Verra</span>
              </div>
              <div className="guarantee-item">
                <span className="material-icons">check_circle</span>
                <span>Never shared with anyone</span>
              </div>
              <div className="guarantee-item">
                <span className="material-icons">check_circle</span>
                <span>Revoke access anytime</span>
              </div>
            </div>
          </div>

          <div className="authorization-section">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={isAuthorized}
                onChange={(e) => setIsAuthorized(e.target.checked)}
              />
              <span className="checkmark"></span>
              <span className="checkbox-label">I authorize Verra AI to analyze my fleet data</span>
            </label>
          </div>

          <div className="action-buttons">
            <button
              className={`btn-enable ${!isAuthorized ? 'disabled' : ''}`}
              disabled={!isAuthorized}
              onClick={handleAccept}
            >
              <span className="material-icons">play_arrow</span>
              <span>Enable AI Insights — Start Analysis</span>
            </button>
            <button className="btn-back" onClick={onDecline}>
              <span>Go Back</span>
            </button>
          </div>

          {/* Terms & Privacy Highlight */}
          <div className="terms-highlight-box">
            <div className="terms-highlight-content">
              <span className="material-icons">info</span>
              <div className="terms-text">
                <p>
                  <strong>Before you continue:</strong> By enabling AI Insights, you agree to our
                  data processing terms. Your data stays secure, never leaves Verra, and you can
                  revoke access anytime.
                </p>
                <div className="terms-cta">
                  <a href="#" onClick={showTerms}>
                    Read Full Terms
                  </a>
                  <span>•</span>
                  <a href="#" onClick={showPrivacy}>
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="security-badges-footer">
            <div className="badge-item">
              <span className="material-icons">lock</span>
              <span>256-bit Encryption</span>
            </div>
            <div className="badge-item">
              <span className="material-icons">verified_user</span>
              <span>SOC 2 Certified</span>
            </div>
            <div className="badge-item">
              <span className="material-icons">privacy_tip</span>
              <span>GDPR Compliant</span>
            </div>
            <div className="powered-by-badge">
              Powered by <strong>Vinli</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Terms/Privacy Modal */}
      {(showTermsModal || showPrivacyModal) && (
        <div className="terms-modal" onClick={closeModals}>
          <div className="terms-content" onClick={(e) => e.stopPropagation()}>
            <div className="terms-header">
              <h2>{showTermsModal ? 'Terms of Service' : 'Privacy Policy'}</h2>
              <button className="close-btn" onClick={closeModals}>
                <span className="material-icons">close</span>
              </button>
            </div>
            <div className="terms-body">
              {showTermsModal && (
                <>
                  <h3>AI Insights Data Processing Agreement</h3>

                  <h4>1. Data Collection and Use</h4>
                  <p>
                    By enabling Verra AI Insights, you authorize Verra Mobility to collect, process,
                    and analyze telematics and operational data from vehicles in your fleet for the
                    purpose of generating insights, predictions, patterns, and trends.
                  </p>

                  <h4>2. Data Security</h4>
                  <p>
                    All data is transmitted and stored using industry-standard encryption. Verra
                    Mobility maintains comprehensive security measures to protect your fleet data from
                    unauthorized access, disclosure, alteration, or destruction.
                  </p>

                  <h4>3. Data Ownership</h4>
                  <p>
                    You retain full ownership of your fleet data. Verra Mobility acts as a data
                    processor and will not sell, rent, or share your data with third parties except as
                    required by law or as necessary to provide the AI Insights service.
                  </p>

                  <h4>4. AI Processing</h4>
                  <p>
                    AI Insights utilizes machine learning models powered by Vinli to analyze your
                    fleet data. These models are designed to identify patterns, predict trends, and
                    generate actionable recommendations specific to your operations.
                  </p>

                  <h4>5. Service Accuracy</h4>
                  <p>
                    While AI Insights strives for high accuracy, predictions and recommendations are
                    provided as guidance and should be evaluated in the context of your specific
                    operational needs. Verra Mobility does not guarantee specific outcomes from the
                    use of AI-generated insights.
                  </p>

                  <h4>6. Termination</h4>
                  <p>
                    You may disable AI Insights at any time through your account settings. Upon
                    termination, data processing will cease, though historical analysis results may be
                    retained for record-keeping purposes in accordance with applicable regulations.
                  </p>

                  <h4>7. Updates to Terms</h4>
                  <p>
                    Verra Mobility reserves the right to update these terms as the AI Insights service
                    evolves. You will be notified of significant changes and may be required to
                    re-consent to continue using the service.
                  </p>

                  <div className="terms-footer-info">
                    <p>
                      <strong>Last Updated:</strong> January 10, 2025
                    </p>
                    <p>
                      <strong>Contact:</strong> ai-insights@verramobility.com
                    </p>
                  </div>
                </>
              )}
              {showPrivacyModal && (
                <>
                  <h3>Privacy Policy</h3>
                  <p>Privacy policy content goes here...</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
