import { QuestionType } from "@/public/types/mbti";

export const QUESTIONNAIRE: QuestionType[] = [
  // 1. E vs I (에너지 방향)
  {
    id: 1,
    question: "오랜만에 생긴 휴일! 당신의 계획은?",
    answers: [
      { text: "친구들과 만나서 맛집 탐방하고 수다 떨기", type: "E" },
      { text: "집에서 밀린 영화 보며 혼자만의 시간 즐기기", type: "I" },
    ],
  },
  {
    id: 2,
    question: "새로운 모임에 나갔다. 당신의 행동은?",
    answers: [
      { text: "먼저 말을 걸고 분위기를 주도한다", type: "E" },
      { text: "누군가 말을 걸어줄 때까지 조용히 있는다", type: "I" },
    ],
  },
  {
    id: 3,
    question: "친구가 갑자기 '지금 나와!'라고 부른다면?",
    answers: [
      { text: "오! 좋아! 바로 나간다", type: "E" },
      { text: "갑자기? (귀찮아서) 핑계를 대고 거절한다", type: "I" },
    ],
  },

  // 2. S vs N (인식 방식)
  {
    id: 4,
    question: "여행 계획을 짤 때 나는?",
    answers: [
      { text: "맛집, 숙소, 동선까지 꼼꼼하게 알아본다 (현실적)", type: "S" },
      { text: "일단 가서 느낌 오는 대로 다닌다 (즉흥적)", type: "N" },
    ],
  },
  {
    id: 5,
    question: "멍 때릴 때 주로 하는 생각은?",
    answers: [
      { text: "오늘 저녁 뭐 먹지? (현실적인 고민)", type: "S" },
      { text: "좀비가 나타나면 어떻게 도망가지? (상상의 나래)", type: "N" },
    ],
  },
  {
    id: 6,
    question: "영화를 볼 때 더 중요하게 생각하는 것은?",
    answers: [
      { text: "화려한 영상미와 배우들의 연기력", type: "S" },
      { text: "영화 속에 숨겨진 의미와 철학적인 메시지", type: "N" },
    ],
  },

  // 3. T vs F (판단 기준)
  {
    id: 7,
    question: "친구가 우울해서 머리를 잘랐다고 한다. 나의 반응은?",
    answers: [
      { text: "왜 우울해? 무슨 일 있어?", type: "T" },
      { text: "저런.. 기분 전환은 좀 됐어? 머리 예쁘다!", type: "F" },
    ],
  },
  {
    id: 8,
    question: "나와 의견이 다른 사람과 논쟁할 때 나는?",
    answers: [
      { text: "논리적으로 내 말이 맞다는 걸 증명한다", type: "T" },
      { text: "상대방의 기분이 상하지 않게 좋게 넘어간다", type: "F" },
    ],
  },
  {
    id: 9,
    question: "친구가 차 사고가 났다고 전화가 왔다. 나의 첫 마디는?",
    answers: [
      { text: "보험은 불렀어? 누구 과실이야?", type: "T" },
      { text: "헐! 괜찮아? 안 다쳤어?", type: "F" },
    ],
  },

  // 4. J vs P (생활 양식)
  {
    id: 10,
    question: "업무나 과제를 할 때 나는?",
    answers: [
      { text: "미리미리 계획을 세워서 여유롭게 끝낸다", type: "J" },
      { text: "마감 기한이 닥쳐야 능률이 오르는 편이다", type: "P" },
    ],
  },
  {
    id: 11,
    question: "2주 뒤에 여행을 가기로 했다. 지금 나는?",
    answers: [
      { text: "비행기, 숙소 예약 완료! 엑셀로 일정 정리 중", type: "J" },
      { text: "아직 2주나 남았네. 천천히 하지 뭐~", type: "P" },
    ],
  },
  {
    id: 12,
    question: "방 청소를 할 때 나는?",
    answers: [
      { text: "원래 물건 위치가 정해져 있어서 항상 깨끗하다", type: "J" },
      { text: "일단 쌓아두다가 한 번에 몰아서 치운다", type: "P" },
    ],
  },
];