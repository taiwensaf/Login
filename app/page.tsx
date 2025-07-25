import Link from "next/link";

/**
 * 首页组件
 * 展示 Bytebase Hub 的欢迎页面
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Logo 区域 */}
        <div className="flex items-center mb-12">
          <img
            src="/Login/image1.png"
            alt="Bytebase Logo"
            width={200}
            height={100}
            className="h-auto"
          />
        </div>
        
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文本区域 */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl font-semibold text-[#1a1a1a] leading-tight">
              Welcome to Bytebase Hub
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Bytebase Hub is for accessing Bytebase Cloud service and managing your Bytebase cloud and self-host subscription.
            </p>
            {/* 操作按钮区域 */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/login"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[#6938EF] hover:bg-[#5F31E1] rounded-md transition-colors duration-200"
              >
                Login / Register
              </Link>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-[#6938EF] bg-[#F3F0FF] hover:bg-[#E9E3FF] rounded-md transition-colors duration-200"
              >
                View Pricing
              </Link>
            </div>
          </div>
          
          {/* 右侧图片区域 */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Login/image2.png"
              alt="Bytebase Illustration"
              width={500}
              height={500}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
