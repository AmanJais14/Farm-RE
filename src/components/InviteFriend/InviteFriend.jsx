import React, { useState } from 'react';
import { Users, Gift, Share2, Copy, Check, Mail, MessageCircle, Send } from 'lucide-react';

const InviteFriend = () => {
  const [copied, setCopied] = useState(false);
  const [email, setEmail] = useState('');
  const [friendEmails, setFriendEmails] = useState(['']);

  const referralLink = "https://agri-investment.com/ref/ABC123";
  const shareMessage = "🌱 Discover Exotic Farming Investment! Earn 16%+ dividends (tax-free) + 12% capital appreciation. Starting at ₹29.9L per acre. Check it out:";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${shareMessage} ${referralLink}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const addEmailField = () => {
    setFriendEmails([...friendEmails, '']);
  };

  const updateEmail = (index, value) => {
    const newEmails = [...friendEmails];
    newEmails[index] = value;
    setFriendEmails(newEmails);
  };

  const removeEmail = (index) => {
    if (friendEmails.length > 1) {
      const newEmails = friendEmails.filter((_, i) => i !== index);
      setFriendEmails(newEmails);
    }
  };

  const shareViaWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareMessage} ${referralLink}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  const shareViaEmail = () => {
    const subject = "Amazing Investment Opportunity - Exotic Farming";
    const body = `${shareMessage}\n\n${referralLink}\n\nBest regards!`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl);
  };

  return (
    <section id="invite-friend" className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-to-br from-green-400/15 to-emerald-400/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/15 to-green-500/15 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-full mb-4 shadow-lg border border-green-200/50">
              <Gift className="w-4 h-4 text-green-600" />
              <span className="text-green-800 font-semibold text-sm">Referral Rewards</span>
            </div>
            <h2 className="text-lg sm:text-2xl md:text-2xl font-black text-green-900 mb-3 sm:mb-4">
              Invite Friends & <span className="gradient-text">Build Community</span>
            </h2>
            <p className="text-xs  text-black max-w-2xl mx-auto">
              Share this amazing investment opportunity with friends and family. When they invest, you both benefit!
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 lg:gap-12 items-center">
            {/* Left Side - Benefits */}
            <div className="animate-slide-up">
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-green-200/50">
                <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  Referral Benefits
                </h3>
                
                <div className="space-y-4">
                  {/* <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Gift className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 text-sm sm:text-base">₹50,000 Bonus</h4>
                      <p className="text-xs sm:text-sm text-green-600">For every successful referral investment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 text-sm sm:text-base">Friend Gets ₹50,000</h4>
                      <p className="text-xs sm:text-sm text-green-600">Discount on their first investment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-800 text-sm sm:text-base">Unlimited Referrals</h4>
                      <p className="text-xs sm:text-sm text-green-600">No limit on how many friends you can refer</p>
                    </div>
                  </div> */}
                  <p classname = "text-xs text-green-600 text-justify">We believe a great community starts with trusted relationships. When you invite a friend to join our farmland project, you’re not just introducing them to an investment- you’re helping build a network of likeminded landowners who share your vision.

To thank you, both you and your friend get <span className='font-bold text-green-700'> ₹50,000 off </span> when each completes a purchase.</p> 
<p className='font-bold text-green-700'>A shared start, a stronger community.</p>
                </div>

                {/* Quick Share Buttons */}
                <div className="mt-6 pt-6 border-t border-green-200">
                  <p className="text-sm font-semibold text-black mb-3">Quick Share:</p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={shareViaWhatsApp}
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </button>
                    
                    <button
                      onClick={shareViaEmail}
                      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </button>
                    
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-105"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Invite Form */}
            {/* <div className="animate-slide-up delay-200">
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-green-200/50">
                <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-4 sm:mb-6 flex items-center gap-2">
                  <Send className="w-5 h-5 text-green-600" />
                  Send Personal Invites
                </h3>

                <form className="space-y-4">
             
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-2">Your Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 text-sm"
                    />
                  </div>

              
                  <div>
                    <label className="block text-sm font-semibold text-green-800 mb-2">Friends' Emails</label>
                    {friendEmails.map((email, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => updateEmail(index, e.target.value)}
                          placeholder="friend.email@example.com"
                          className="flex-1 px-4 py-3 rounded-xl border border-green-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-300 text-sm"
                        />
                        {friendEmails.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeEmail(index)}
                            className="px-3 py-3 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl transition-all duration-300"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ))}
                    
                    <button
                      type="button"
                      onClick={addEmailField}
                      className="text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-300"
                    >
                      + Add another email
                    </button>
                  </div>

                 
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Invitations
                  </button>
                </form>

              
                <div className="mt-6 pt-6 border-t border-green-200">
                  <label className="block text-sm font-semibold text-green-800 mb-2">Your Referral Link</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={referralLink}
                      readOnly
                      className="flex-1 px-4 py-2 rounded-lg border border-green-200 bg-green-50 text-green-700 text-sm"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InviteFriend;
