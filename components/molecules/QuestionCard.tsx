import { QuestionType } from "@/public/types/mbti";

interface QuestionCardProps {
  question: QuestionType; // 질문 데이터 1개
  onAnswer: (type: string) => void; // 답변 클릭 시 실행할 함수
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  return (
    <div className="w-full max-w-lg mx-auto">
      {/* 질문 텍스트 */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center leading-relaxed">
        Q{question.id}.<br />
        {question.question}
      </h2>

      {/* 답변 버튼 목록 */}
      <div className="flex flex-col gap-4">
        {question.answers.map((ans, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(ans.type)}
            className="w-full py-5 px-6 text-left bg-white border-2 border-gray-200 rounded-xl 
                       hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 
                       transition-all duration-200 shadow-sm text-lg font-medium text-gray-700"
          >
            {ans.text}
          </button>
        ))}
      </div>
    </div>
  );
}