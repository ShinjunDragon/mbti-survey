import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const startTest = () => {
    router.push('/test');
  };

  return (
    // 1. bg-yellow-300: 배경을 노란색으로 설정 (이 영역 안에 카드가 들어갑니다)
    // 2. flex items-center justify-center: 이 노란 박스 안의 내용물을 정중앙에 배치
    // 3. min-h-screen: 노란색 배경을 화면 전체 높이로 꽉 채움
    <div className="min-h-screen flex items-center justify-center bg-yellow-300">
      
      {/* 흰색 카드 박스 (여기는 건드릴 필요 없음) */}
      <div className="w-full max-w-md bg-yellow rounded-3xl shadow-xl overflow-hidden p-10 text-center mx-4">
        
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">
            나만의 성향 테스트
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