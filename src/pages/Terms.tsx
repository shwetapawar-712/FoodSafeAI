import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These terms govern your use of SafeScan and outline our mutual responsibilities 
            for safe and reliable allergen detection.
          </p>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <FileText className="w-4 h-4" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Acceptance */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <div className="flex items-center gap-4 mb-6">
              <Scale className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                By accessing or using SafeScan, you agree to be bound by these Terms of Service and our Privacy Policy. 
                If you do not agree to these terms, please do not use our service.
              </p>
              <p>
                These terms may be updated from time to time. We will notify you of significant changes 
                via email or through the app. Continued use after changes constitutes acceptance.
              </p>
            </div>
          </div>

          {/* Service Description */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Service Description</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                SafeScan provides AI-powered allergen detection technology to help users identify 
                potential allergens in food products. Our service includes:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Optical character recognition (OCR) for ingredient scanning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>AI-based allergen detection and risk assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Personalized allergy alerts and recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Product database search and scan history tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">User Responsibilities</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>As a user of SafeScan, you agree to:</p>
              <ul className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Provide accurate allergy profile information for personalized alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Use the service responsibly and not rely solely on app results for life-threatening allergies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Consult healthcare professionals for medical advice regarding allergies</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Report any inaccuracies or safety concerns immediately</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Not misuse the service or attempt to circumvent security measures</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="bg-status-risk-bg border border-status-risk rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-status-risk" />
              <h2 className="text-2xl font-bold text-status-risk">Important Medical Disclaimer</h2>
            </div>
            <div className="space-y-4 text-status-risk">
              <p className="font-medium">
                SafeScan is a tool to assist with allergen identification but should not be your only method 
                of allergen detection, especially for severe or life-threatening allergies.
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-status-risk rounded-full mt-2"></div>
                  <span>Always carry emergency medication (like EpiPens) as prescribed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-status-risk rounded-full mt-2"></div>
                  <span>Consult manufacturers directly for unclear ingredients</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-status-risk rounded-full mt-2"></div>
                  <span>Work with healthcare providers for comprehensive allergy management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Limitation of Liability</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                While we strive for the highest accuracy, SafeScan is provided "as is" and we cannot 
                guarantee 100% accuracy in all scenarios. Our liability is limited to the maximum 
                extent permitted by law.
              </p>
              <p>
                We are not liable for any health consequences resulting from allergen exposure, 
                whether due to app malfunction, user error, or any other cause.
              </p>
            </div>
          </div>

          {/* Account Termination */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h2 className="text-2xl font-bold text-foreground mb-6">Account Termination</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                You may terminate your account at any time through the app settings. 
                We may terminate accounts that violate these terms or pose security risks.
              </p>
              <p>
                Upon termination, your data will be deleted in accordance with our Privacy Policy, 
                typically within 30 days of account closure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions About These Terms?</h2>
          <p className="text-muted-foreground mb-6">
            Our legal team is available to clarify any aspect of our Terms of Service.
          </p>
          <div className="bg-card rounded-2xl p-6 shadow-card">
            <p className="text-foreground font-medium">Contact our Legal Team</p>
            <p className="text-muted-foreground">legal@safescan.com</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;