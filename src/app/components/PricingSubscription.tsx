import { useState } from "react";
import { 
  ArrowLeft, 
  Check, 
  CreditCard, 
  CheckCircle2, 
  XCircle, 
  Sparkles,
  Shield,
  Zap,
  Award
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface PricingSubscriptionProps {
  onNavigate: (page: string) => void;
}

export function PricingSubscription({ onNavigate }: PricingSubscriptionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');

  const pricingPlans = [
    {
      id: 'free',
      name: 'Free',
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: 'Perfect for getting started',
      features: [
        { text: 'Access to basic notes library', included: true },
        { text: '5 AI assistant queries/month', included: true },
        { text: 'Project submission (2/semester)', included: true },
        { text: 'Basic roadmap access', included: true },
        { text: 'Community support', included: true },
        { text: 'Unlimited AI queries', included: false },
        { text: 'AI feedback on projects', included: false },
        { text: 'Priority support', included: false }
      ],
      popular: false,
      cta: 'Current Plan'
    },
    {
      id: 'pro',
      name: 'Pro',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      description: 'For serious learners',
      features: [
        { text: 'Everything in Free', included: true },
        { text: 'Unlimited notes access', included: true },
        { text: 'Unlimited AI assistant queries', included: true },
        { text: 'Unlimited project submissions', included: true },
        { text: 'AI feedback on projects', included: true },
        { text: 'Personalized roadmaps', included: true },
        { text: 'Internship recommendations', included: true },
        { text: 'Priority support', included: true },
        { text: 'Resume analyzer', included: true },
        { text: 'Download all notes', included: true }
      ],
      popular: true,
      cta: 'Upgrade to Pro',
      badge: 'Most Popular'
    },
    {
      id: 'institute',
      name: 'Institute',
      monthlyPrice: null,
      yearlyPrice: null,
      description: 'For colleges & training centers',
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'Admin dashboard', included: true },
        { text: 'Bulk student accounts', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Analytics & reports', included: true },
        { text: 'Dedicated support manager', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'API access', included: true },
        { text: 'SLA guarantee', included: true }
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    if (planId === 'institute') {
      // Contact sales
      return;
    }
    if (planId === 'free') {
      // Already on free plan
      return;
    }
    setSelectedPlan(planId);
    setShowCheckout(true);
  };

  const handlePayment = () => {
    setPaymentStatus('processing');
    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus('success');
    }, 2000);
  };

  const getPrice = (plan: typeof pricingPlans[0]) => {
    if (plan.monthlyPrice === null) return 'Custom';
    if (plan.monthlyPrice === 0) return '₹0';
    return billingCycle === 'monthly' ? `₹${plan.monthlyPrice}` : `₹${plan.yearlyPrice}`;
  };

  const getPeriod = (plan: typeof pricingPlans[0]) => {
    if (plan.monthlyPrice === null) return 'pricing';
    if (plan.monthlyPrice === 0) return 'forever';
    return billingCycle === 'monthly' ? 'per month' : 'per year';
  };

  const getSavings = () => {
    if (billingCycle === 'yearly') {
      return 'Save 17%';
    }
    return null;
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center p-6">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Welcome to UniPilot Pro! Your subscription is now active and you have access to all premium features.
          </p>
          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Unlimited AI Queries</p>
                <p className="text-xs text-gray-600">Access AI assistant anytime</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">AI Project Feedback</p>
                <p className="text-xs text-gray-600">Get detailed AI analysis</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="font-medium text-sm">Priority Support</p>
                <p className="text-xs text-gray-600">Get help faster</p>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => onNavigate('dashboard')}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12"
          >
            Go to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 flex items-center justify-center p-6">
        <Card className="max-w-md w-full p-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Failed</h1>
          <p className="text-gray-600 mb-8">
            We couldn't process your payment. Please try again or use a different payment method.
          </p>
          <div className="flex gap-3">
            <Button 
              variant="outline"
              onClick={() => setPaymentStatus('idle')}
              className="flex-1"
            >
              Try Again
            </Button>
            <Button 
              onClick={() => onNavigate('dashboard')}
              className="flex-1"
            >
              Go Back
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  if (showCheckout && selectedPlan) {
    const plan = pricingPlans.find(p => p.id === selectedPlan);
    if (!plan) return null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => setShowCheckout(false)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Plans
          </Button>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Order Summary */}
            <Card className="p-6 h-fit">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-lg">{plan.name} Plan</p>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
                    {plan.badge}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Billing Cycle</span>
                  <span className="font-medium">{billingCycle === 'monthly' ? 'Monthly' : 'Yearly'}</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">{getPrice(plan)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tax (18% GST)</span>
                  <span className="font-medium">
                    {billingCycle === 'monthly' ? '₹36' : '₹358'}
                  </span>
                </div>
                {billingCycle === 'yearly' && (
                  <div className="flex items-center justify-between text-green-600">
                    <span>Yearly Discount</span>
                    <span className="font-medium">-₹408</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between text-xl font-bold pt-4 border-t-2 border-gray-200">
                <span>Total</span>
                <span>
                  {billingCycle === 'monthly' ? '₹235' : '₹2,348'}
                </span>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm text-blue-900 mb-1">Secure Payment</p>
                    <p className="text-xs text-blue-700">
                      Your payment information is encrypted and secure. We never store your card details.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Payment Form */}
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <div className="relative">
                    <Input 
                      id="card-number" 
                      placeholder="1234 5678 9012 3456"
                      className="pl-11"
                    />
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="card-name">Cardholder Name</Label>
                  <Input id="card-name" placeholder="RAHUL SHARMA" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" type="password" />
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-4">Or pay with UPI</p>
                  <div className="space-y-3">
                    <RadioGroup defaultValue="card">
                      <div className="flex items-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-gray-600" />
                            <span>Credit/Debit Card</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-gray-600" />
                            <span>UPI</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <Button 
                  type="button"
                  onClick={handlePayment}
                  disabled={paymentStatus === 'processing'}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12"
                >
                  {paymentStatus === 'processing' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    <>Pay {billingCycle === 'monthly' ? '₹235' : '₹2,348'}</>
                  )}
                </Button>

                <p className="text-xs text-center text-gray-500">
                  By confirming your subscription, you agree to our Terms of Service and Privacy Policy. 
                  Your subscription will auto-renew each {billingCycle === 'monthly' ? 'month' : 'year'}.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => onNavigate('dashboard')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-5xl font-bold mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 mb-8">
            Unlock your full potential with UniPilot Pro
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-white rounded-2xl border-2 border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl font-medium transition-all relative ${
                billingCycle === 'yearly' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Yearly
              <Badge className="absolute -top-2 -right-2 bg-green-500 text-white border-0 text-xs">
                Save 17%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id}
              className={`p-8 relative ${
                plan.popular 
                  ? 'border-4 border-blue-500 shadow-2xl scale-105' 
                  : 'border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {plan.badge}
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="text-5xl font-bold mb-1">{getPrice(plan)}</div>
                <div className="text-gray-600">{getPeriod(plan)}</div>
                {billingCycle === 'yearly' && plan.monthlyPrice && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-green-600 mt-2">
                    {getSavings()}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handlePlanSelect(plan.id)}
                className={`w-full h-12 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700' 
                    : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
                disabled={plan.id === 'free'}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Why Upgrade to Pro?</h2>
            <p className="text-gray-600">
              Join thousands of students who are accelerating their learning with AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Unlimited AI Power</h3>
              <p className="text-sm text-gray-600">
                Get instant help 24/7 with our AI assistant. No query limits, no waiting.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">AI Project Feedback</h3>
              <p className="text-sm text-gray-600">
                Get detailed AI analysis on your projects to improve quality and grades.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">Personalized Roadmaps</h3>
              <p className="text-sm text-gray-600">
                AI-curated learning paths tailored to your goals and skill level.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
