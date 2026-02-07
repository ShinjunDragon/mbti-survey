import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const startTest = () => {
    router.push('/test');
  };

  return (
    // 전체 배경: 노란색 (bg-yellow-300)
    <div className="min-h-screen flex items-center justify-center bg-yellow-300">
      
      {/* 카드 배경: 흰색 (bg-white로 수정함) */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden p-10 text-center mx-4">
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            나만의 성향 테스트입니다.
          </h1>
          <p className="text-gray-500">
            간단한 질문으로 알아보는<br />나의 성향은 무엇일까요?
          </p>
        </div>

        <button
          onClick={startTest}
          className="w-full py-4 bg-blue-500 text-white text-xl font-bold rounded-2xl shadow-md hover:bg-blue-600 transition-all hover:scale-105"
        >
          테스트 시작하기
        </button>

      </div>
    </div>
  );
}