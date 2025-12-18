import { useState } from "react";
import { GraduationCap, Mail, Lock, Eye, EyeOff, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./ui/input-otp";

interface AuthProps {
  mode: 'login' | 'signup' | 'otp' | 'forgot-password';
  onNavigate: (page: string) => void;
}

export function Auth({ mode, onNavigate }: AuthProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login' || mode === 'signup') {
      onNavigate('otp');
    } else if (mode === 'otp') {
      onNavigate('dashboard');
    } else if (mode === 'forgot-password') {
      onNavigate('login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-6">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-xl shadow-blue-500/30">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              UniPilot
            </span>
          </div>
        </div>

        <Card className="p-8 lg:p-10 bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl">
          {/* Back button for non-login screens */}
          {mode !== 'login' && mode !== 'signup' && (
            <Button 
              variant="ghost" 
              className="mb-6 -ml-2 hover:bg-gray-100"
              onClick={() => onNavigate(mode === 'otp' ? 'signup' : 'login')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}

          {/* Login Form */}
          {mode === 'login' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-bold">Welcome Back</h1>
                <p className="text-gray-600">Sign in to continue your learning journey</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@college.edu"
                      className="pl-11"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="pl-11 pr-11"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <button 
                    type="button"
                    onClick={() => onNavigate('forgot-password')}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12"
              >
                Sign In
              </Button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <button 
                  type="button"
                  onClick={() => onNavigate('signup')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign up free
                </button>
              </div>
            </form>
          )}

          {/* Signup Form */}
          {mode === 'signup' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-2">
                  <Sparkles className="w-4 h-4" />
                  Start Free Today
                </div>
                <h1 className="text-3xl font-bold">Create Your Account</h1>
                <p className="text-gray-600">Join 10,000+ engineering students</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Rahul"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Sharma"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">College Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@college.edu"
                      className="pl-11"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="college">College / University</Label>
                  <Input
                    id="college"
                    type="text"
                    placeholder="e.g., IIT Delhi, NIT Trichy"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className="pl-11 pr-11"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm">
                  <input type="checkbox" className="rounded border-gray-300 mt-1" required />
                  <span className="text-gray-600">
                    I agree to the{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
                    {" "}and{" "}
                    <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
                  </span>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12"
              >
                Create Account
              </Button>

              <div className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <button 
                  type="button"
                  onClick={() => onNavigate('login')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign in
                </button>
              </div>
            </form>
          )}

          {/* OTP Verification */}
          {mode === 'otp' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold">Verify Your Email</h1>
                <p className="text-gray-600">
                  We've sent a 6-digit code to<br />
                  <span className="font-medium text-gray-900">{email || 'your@email.com'}</span>
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex justify-center">
                  <InputOTP 
                    maxLength={6} 
                    value={otpValue} 
                    onChange={(value) => setOtpValue(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <div className="text-center text-sm text-gray-600">
                  Didn't receive the code?{" "}
                  <button 
                    type="button"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Resend
                  </button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12"
              >
                Verify & Continue
              </Button>
            </form>
          )}

          {/* Forgot Password */}
          {mode === 'forgot-password' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center space-y-2 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-bold">Reset Password</h1>
                <p className="text-gray-600">
                  Enter your email and we'll send you a reset link
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="reset-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="reset-email"
                      type="email"
                      placeholder="your.email@college.edu"
                      className="pl-11"
                      required
                    />
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-12"
              >
                Send Reset Link
              </Button>

              <div className="text-center text-sm text-gray-600">
                Remember your password?{" "}
                <button 
                  type="button"
                  onClick={() => onNavigate('login')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign in
                </button>
              </div>
            </form>
          )}
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-gray-600">
          <button onClick={() => onNavigate('landing')} className="hover:text-blue-600 transition-colors">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}