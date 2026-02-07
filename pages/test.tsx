import { useState } from "react";
import { useRouter } from "next/router";
import QuestionCard from "@/components/molecules/QuestionCard";
import { QUESTIONNAIRE } from "@/public/constants/questionnaire";

export default function TestPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); 
  const [mbtiScore, setMbtiScore] = useState<string[]>([]);

  const handleAnswer = (type: string) => {
    const newScore = [...mbtiScore, type];
    setMbtiScore(newScore);

    if (step < QUESTIONNAIRE.length - 1) {
      setStep(step + 1); // 다음 질문으로
    } else {
      console.log("결과:", newScore);
      router.push("/result/loading"); // 결과 페이지로 이동
    }
  };

  const currentQuestion = QUESTIONNAIRE[step];
  const progress = ((step + 1) / QUESTIONNAIRE.length) * 100;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 1. 상단 프로그레스 바 (파란색 선) */}
      <div className="w-full h-1.5 bg-gray-100 fixed top-0 left-0 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* 2. 질문 영역 (화면 중앙 정렬) */}
      <main className="flex-1 flex flex-col justify-center items-center py-12 animate-fade-in-up">
        
        <QuestionCard 
          question={currentQuestion}
          currentStep={step + 1}
          totalSteps={QUESTIONNAIRE.length}
          onAnswer={handleAnswer}
        />

        {/* 3. 뒤로가기 버튼 */}
        {step > 0 && (
          <button 
            onClick={() => setStep(step - 1)}
            className="mt-12 text-gray-400 text-sm underline hover:text-gray-600 transition-colors"
          >
            이전 질문으로
          </button>
        )}
      </main>
    </div>
  );
}