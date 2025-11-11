<template>
  <div class="ai-consent-page">
    <!-- Verra Header -->
    <div class="page-header">
      <div class="header-content">
        <img src="/verra-logo.png" alt="Verra Mobility" class="header-logo" onerror="this.src='https://www.verramobility.com/wp-content/uploads/2022/06/verra_logo_notagline.png'">
        <button class="btn-close" @click="handleDecline">
          <span class="close-text">Close</span>
          <span class="material-icons">close</span>
        </button>
      </div>
    </div>

    <div class="consent-container">
      <!-- Simple Consent Content -->
      <div class="simple-consent">
        <h1 class="consent-title">Almost There! Just Need Your OK</h1>
        <p class="consent-subtitle">You're 30 seconds away from AI insights</p>

        <div class="permission-box-simple">
          <h2 class="permission-heading">What We Need Permission For:</h2>
          <ul class="permission-list">
            <li>
              <span class="material-icons">description</span>
              <div>
                <strong>Read your toll and violation data</strong>
                <span>Access transaction history to identify patterns</span>
              </div>
            </li>
            <li>
              <span class="material-icons">analytics</span>
              <div>
                <strong>Process patterns to find issues</strong>
                <span>Compare against 40,000+ fleets to detect anomalies</span>
              </div>
            </li>
            <li>
              <span class="material-icons">lightbulb</span>
              <div>
                <strong>Generate recommendations</strong>
                <span>Provide actionable insights to reduce costs</span>
              </div>
            </li>
          </ul>

          <div class="guarantees">
            <div class="guarantee-item">
              <span class="material-icons">check_circle</span>
              <span>Your data stays in Verra</span>
            </div>
            <div class="guarantee-item">
              <span class="material-icons">check_circle</span>
              <span>Never shared with anyone</span>
            </div>
            <div class="guarantee-item">
              <span class="material-icons">check_circle</span>
              <span>Revoke access anytime</span>
            </div>
          </div>
        </div>

        <div class="authorization-section">
          <label class="checkbox-container">
            <input type="checkbox" v-model="isAuthorized" />
            <span class="checkmark"></span>
            <span class="checkbox-label">I authorize Verra AI to analyze my fleet data</span>
          </label>
        </div>

        <div class="action-buttons">
          <button
            class="btn-enable"
            :disabled="!isAuthorized"
            :class="{ disabled: !isAuthorized }"
            @click="handleAccept"
          >
            <span class="material-icons">play_arrow</span>
            <span>Enable AI Insights — Start Analysis</span>
          </button>
          <button class="btn-back" @click="handleDecline">
            <span>Go Back</span>
          </button>
        </div>

        <!-- Terms & Privacy Highlight -->
        <div class="terms-highlight-box">
          <div class="terms-highlight-content">
            <span class="material-icons">info</span>
            <div class="terms-text">
              <p><strong>Before you continue:</strong> By enabling AI Insights, you agree to our data processing terms. Your data stays secure, never leaves Verra, and you can revoke access anytime.</p>
              <div class="terms-cta">
                <a href="#" @click.prevent="showTerms">Read Full Terms</a>
                <span>•</span>
                <a href="#" @click.prevent="showPrivacy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>

        <div class="security-badges-footer">
          <div class="badge-item">
            <span class="material-icons">lock</span>
            <span>256-bit Encryption</span>
          </div>
          <div class="badge-item">
            <span class="material-icons">verified_user</span>
            <span>SOC 2 Certified</span>
          </div>
          <div class="badge-item">
            <span class="material-icons">privacy_tip</span>
            <span>GDPR Compliant</span>
          </div>
          <div class="powered-by-badge">Powered by <strong>Vinli</strong></div>
        </div>
      </div>
    </div>

    <!-- Terms/Privacy Modal -->
    <div v-if="showTermsModal || showPrivacyModal" class="terms-modal" @click.self="closeModals">
      <div class="terms-content">
        <div class="terms-header">
          <h2>{{ showTermsModal ? 'Terms of Service' : 'Privacy Policy' }}</h2>
          <button class="close-btn" @click="closeModals">
            <span class="material-icons">close</span>
          </button>
        </div>
        <div class="terms-body">
          <div v-if="showTermsModal">
          <h3>AI Insights Data Processing Agreement</h3>

          <h4>1. Data Collection and Use</h4>
          <p>
            By enabling Verra AI Insights, you authorize Verra Mobility to collect, process, and analyze
            telematics and operational data from vehicles in your fleet for the purpose of generating
            insights, predictions, patterns, and trends.
          </p>

          <h4>2. Data Security</h4>
          <p>
            All data is transmitted and stored using industry-standard encryption. Verra Mobility maintains
            comprehensive security measures to protect your fleet data from unauthorized access, disclosure,
            alteration, or destruction.
          </p>

          <h4>3. Data Ownership</h4>
          <p>
            You retain full ownership of your fleet data. Verra Mobility acts as a data processor and will
            not sell, rent, or share your data with third parties except as required by law or as necessary
            to provide the AI Insights service.
          </p>

          <h4>4. AI Processing</h4>
          <p>
            AI Insights utilizes machine learning models powered by Vinli to analyze your fleet data.
            These models are designed to identify patterns, predict trends, and generate actionable
            recommendations specific to your operations.
          </p>

          <h4>5. Service Accuracy</h4>
          <p>
            While AI Insights strives for high accuracy, predictions and recommendations are provided
            as guidance and should be evaluated in the context of your specific operational needs.
            Verra Mobility does not guarantee specific outcomes from the use of AI-generated insights.
          </p>

          <h4>6. Termination</h4>
          <p>
            You may disable AI Insights at any time through your account settings. Upon termination,
            data processing will cease, though historical analysis results may be retained for record-keeping
            purposes in accordance with applicable regulations.
          </p>

          <h4>7. Updates to Terms</h4>
          <p>
            Verra Mobility reserves the right to update these terms as the AI Insights service evolves.
            You will be notified of significant changes and may be required to re-consent to continue
            using the service.
          </p>

          <div class="terms-footer-info">
            <p><strong>Last Updated:</strong> January 10, 2025</p>
            <p><strong>Contact:</strong> ai-insights@verramobility.com</p>
          </div>
          </div>
          <div v-if="showPrivacyModal">
            <h3>Privacy Policy</h3>
            <p>Privacy policy content goes here...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showTermsModal = ref(false)
const showPrivacyModal = ref(false)
const isAuthorized = ref(false)
const emit = defineEmits(['accept', 'decline'])

function handleAccept() {
  emit('accept')
}

function handleDecline() {
  emit('decline')
}

function showTerms() {
  showTermsModal.value = true
}

function showPrivacy() {
  showPrivacyModal.value = true
}

function closeModals() {
  showTermsModal.value = false
  showPrivacyModal.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

/* Base Styles */
.ai-consent-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #f7fafc 0%, #edf2f7 100%);
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Header */
.page-header {
  background: white;
  padding: 14px 32px;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.header-logo {
  width: 130px;
  height: auto;
  flex-shrink: 0;
}

.btn-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 14px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #718096;
  transition: all 0.2s;
  border-radius: 6px;
  flex-shrink: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 14px;
}

.btn-close:hover {
  color: #2d3748;
  background: #f7fafc;
}

.btn-close .material-icons {
  font-size: 20px;
}

.close-text {
  font-weight: 600;
}

/* Container */
.consent-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 16px 32px 16px 32px;
}

/* Simple Consent */
.simple-consent {
  text-align: center;
}

/* Title and Subtitle */
.consent-title {
  font-size: 36px;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 8px 0;
  line-height: 1.2;
  font-family: 'Montserrat', sans-serif;
}

.consent-subtitle {
  font-size: 18px;
  color: #4a5568;
  margin: 0 0 20px 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

/* Permission Box */
.permission-box-simple {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  padding: 16px 20px;
  text-align: left;
  margin-bottom: 14px;
}

.permission-heading {
  font-size: 13px;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.permission-list {
  list-style: none;
  padding: 0;
  margin: 0 0 14px 0;
}

.permission-list li {
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
  align-items: flex-start;
}

.permission-list li:last-child {
  margin-bottom: 0;
}

.permission-list .material-icons {
  color: #9fc908;
  font-size: 28px;
  flex-shrink: 0;
}

.permission-list div {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.permission-list strong {
  font-size: 13px;
  color: #1a202c;
  font-weight: 600;
}

.permission-list span {
  font-size: 12px;
  color: #718096;
  line-height: 1.4;
}

/* Guarantees */
.guarantees {
  display: flex;
  gap: 12px;
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;
  flex-wrap: wrap;
  justify-content: center;
}

.guarantee-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #2d3748;
  font-weight: 500;
}

.guarantee-item .material-icons {
  color: #48bb78;
  font-size: 16px;
}

/* Authorization Section */
.authorization-section {
  margin-bottom: 14px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 14px 16px;
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  transition: all 0.2s;
  position: relative;
}

.checkbox-container:hover {
  border-color: #cbd5e0;
  background: #f7fafc;
}

.checkbox-container input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  height: 24px;
  width: 24px;
  background-color: white;
  border: 2px solid #cbd5e0;
  border-radius: 4px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.checkbox-container input:checked ~ .checkmark {
  background-color: #9fc908;
  border-color: #9fc908;
}

.checkmark::after {
  content: "";
  display: none;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox-container input:checked ~ .checkmark::after {
  display: block;
}

.checkbox-label {
  font-size: 15px;
  color: #2d3748;
  font-weight: 500;
  flex: 1;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 18px;
}

.btn-enable {
  width: 100%;
  background: linear-gradient(135deg, #9fc908, #7da706);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(159, 201, 8, 0.3);
}

.btn-enable:hover:not(.disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(159, 201, 8, 0.4);
  background: linear-gradient(135deg, #a9d918, #8db716);
}

.btn-enable.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

.btn-enable .material-icons {
  font-size: 20px;
}

.btn-back {
  width: 100%;
  background: white;
  color: #718096;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px 28px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-back:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
  color: #4a5568;
}

/* Terms Highlight Box */
.terms-highlight-box {
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  padding: 16px 20px;
  margin-bottom: 16px;
}

.terms-highlight-content {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.terms-highlight-content .material-icons {
  color: #4299e1;
  font-size: 24px;
  flex-shrink: 0;
  margin-top: 2px;
}

.terms-text {
  flex: 1;
  text-align: left;
}

.terms-text p {
  font-size: 13px;
  color: #2d3748;
  line-height: 1.6;
  margin: 0 0 10px 0;
  font-family: 'Montserrat', sans-serif;
}

.terms-text strong {
  font-weight: 600;
  color: #1a202c;
}

.terms-cta {
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}

.terms-cta a {
  color: #9fc908;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  transition: color 0.2s;
  font-family: 'Montserrat', sans-serif;
}

.terms-cta a:hover {
  color: #7da706;
  text-decoration: underline;
}

.terms-cta span {
  color: #cbd5e0;
  font-size: 13px;
}

/* Security Badges Footer */
.security-badges-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  padding-bottom: 8px;
}

.badge-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  color: #718096;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
}

.badge-item .material-icons {
  font-size: 15px;
  color: #48bb78;
}

.powered-by-badge {
  color: #718096;
  font-size: 11px;
  font-family: 'Montserrat', sans-serif;
}

.powered-by-badge strong {
  color: #2d3748;
  font-weight: 600;
}

/* Terms Modal */
.terms-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.terms-content {
  background: white;
  border-radius: 16px;
  max-width: 700px;
  width: 100%;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.terms-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e2e8f0;
}

.terms-header h2 {
  font-size: 24px;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #718096;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #2d3748;
}

.close-btn .material-icons {
  font-size: 24px;
}

.terms-body {
  padding: 24px;
  overflow-y: auto;
}

.terms-body h3 {
  font-size: 20px;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 16px 0;
}

.terms-body h4 {
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  margin: 24px 0 12px 0;
}

.terms-body p {
  font-size: 14px;
  color: #4a5568;
  line-height: 1.8;
  margin: 0 0 16px 0;
}

.terms-footer-info {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e2e8f0;
}

.terms-footer-info p {
  margin: 8px 0;
}

/* Responsive */
@media (max-width: 768px) {
  .consent-container {
    padding: 40px 20px;
  }

  .consent-title {
    font-size: 28px;
  }

  .consent-subtitle {
    font-size: 16px;
  }

  .permission-box-simple {
    padding: 24px;
  }

  .permission-list li {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .guarantees {
    flex-direction: column;
    align-items: center;
  }

  .btn-enable {
    font-size: 16px;
    padding: 16px 24px;
  }

  .security-badges-footer {
    flex-direction: column;
    align-items: center;
  }
}
</style>
