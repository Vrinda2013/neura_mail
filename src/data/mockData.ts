// Centralized mock data for the application

export const emailFolders = {
  spam: [
    { name: 'razorpay@razorpay.com', count: 5, color: 'text-orange-600', category: 'spam' },
    { name: 'flipkart@flipkart.com', count: 12, color: 'text-blue-600', category: 'spam' },
    { name: 'amazon@amazon.com', count: 8, color: 'text-yellow-600', category: 'spam' },
  ],
  work: [
    { name: 'work@company.com', count: 15, color: 'text-indigo-600', category: 'work' },
    { name: 'hr@company.com', count: 4, color: 'text-blue-600', category: 'work' },
    { name: 'team@company.com', count: 8, color: 'text-purple-600', category: 'work' },
  ],
  compliance: [
    { name: 'sbi@sbi.co.in', count: 3, color: 'text-green-600', category: 'compliance' },
    { name: 'tax@income-tax.gov.in', count: 2, color: 'text-red-600', category: 'compliance' },
    { name: 'invoice@vendor.com', count: 5, color: 'text-amber-600', category: 'compliance' },
  ],
  personal: [
    { name: 'college@university.edu', count: 7, color: 'text-purple-600', category: 'personal' },
    { name: 'family@gmail.com', count: 6, color: 'text-pink-600', category: 'personal' },
  ],
};

export const mockEmails = [
  {
    id: 1,
    sender: 'razorpay@razorpay.com',
    subject: 'Payment Confirmation - Order #12345',
    summary: 'Your payment of ₹2,500 has been successfully processed.',
    date: '1/15/2024',
    isRead: false,
    category: 'compliance',
    priority: 'high',
  },
  {
    id: 2,
    sender: 'flipkart@flipkart.com',
    subject: 'Great Deals Await You!',
    summary: 'Exclusive offers on electronics and fashion items.',
    date: '1/14/2024',
    isRead: false,
    category: 'spam',
    priority: 'low',
  },
  {
    id: 3,
    sender: 'work@company.com',
    subject: 'Q4 Report Ready for Review',
    summary: 'The quarterly financial report is now available for review in the shared drive.',
    date: '1/13/2024',
    isRead: true,
    category: 'work',
    priority: 'high',
  },
  {
    id: 4,
    sender: 'sbi@sbi.co.in',
    subject: 'Account Statement - December 2024',
    summary: 'Your monthly account statement is ready for download.',
    date: '1/12/2024',
    isRead: true,
    category: 'compliance',
    priority: 'medium',
  },
  {
    id: 5,
    sender: 'college@university.edu',
    subject: 'Semester Results Published',
    summary: 'Your semester examination results have been published on the student portal.',
    date: '1/11/2024',
    isRead: false,
    category: 'personal',
    priority: 'medium',
  },
];

export const kpiData = [
  {
    title: 'Total Sales',
    value: '$284,590',
    change: '+12.3%',
    trend: 'up' as const
  },
  {
    title: 'Active Licenses',
    value: '1,247',
    change: '+5.7%',
    trend: 'up' as const
  },
  {
    title: 'Top Brand Revenue',
    value: 'TechCorp',
    change: '$89,450',
    trend: 'up' as const
  },
  {
    title: 'Unread Emails',
    value: '12',
    change: '-3 from yesterday',
    trend: 'down' as const
  }
];

export const chartData = {
  revenue: [
    { month: 'Jan', revenue: 45000, target: 50000 },
    { month: 'Feb', revenue: 52000, target: 55000 },
    { month: 'Mar', revenue: 48000, target: 52000 },
    { month: 'Apr', revenue: 61000, target: 58000 },
    { month: 'May', revenue: 59000, target: 62000 },
    { month: 'Jun', revenue: 67000, target: 65000 }
  ],
  shipping: [
    { category: 'Electronics', quantity: 1234 },
    { category: 'Clothing', quantity: 2156 },
    { category: 'Books', quantity: 987 },
    { category: 'Home & Garden', quantity: 1543 },
    { category: 'Sports', quantity: 876 }
  ],
  licenses: [
    { name: 'Premium', value: 45, color: '#8B5CF6' },
    { name: 'Standard', value: 30, color: '#06B6D4' },
    { name: 'Basic', value: 25, color: '#10B981' }
  ]
};

export const recentActivity = [
  { event: 'New order received', time: '2 minutes ago', type: 'success' as const },
  { event: 'License renewed - Premium', time: '1 hour ago', type: 'info' as const },
  { event: 'Payment processed', time: '3 hours ago', type: 'success' as const },
  { event: 'Email campaign sent', time: '1 day ago', type: 'info' as const },
  { event: 'Report generated', time: '2 days ago', type: 'default' as const }
];
