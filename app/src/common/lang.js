// @SRC: https://developers.google.com/assistant/sdk/reference/rpc/languages
const supportedLanguages = {
  "de-DE": {
    "isSdkLanguage": true,
    "langName": "Deutsch (Deutschland)",
    "welcomeMessage": "Hallo! Wie kann ich helfen?",
    "inputPlaceholder": "Frag mich was...",
    "listeningMessage": "Hören...",
    "initSuggestions": [
      { "label": "Wetter", "query": "Wie ist das Wetter heute?" },
      { "label": "Wirf eine Münze", "query": "Wirf eine Münze" },
      { "label": "Was kannst du tun?", "query": "Was kannst du tun?" }
    ]
  },
  "en-AU": {
    "isSdkLanguage": true,
    "langName": "English (Australia)",
    "welcomeMessage": "Hi! How can I help?",
    "inputPlaceholder": "Ask me anything...",
    "listeningMessage": "Listening...",
    "initSuggestions": [
      { "label": "Weather", "query": "How\\'s the Weather today?" },
      { "label": "Toss a coin", "query": "Toss a coin" },
      { "label": "What can you do?", "query": "What can you do?" }
    ]
  },
  "en-CA": {
    "isSdkLanguage": true,
    "langName": "English (Canada)",
    "welcomeMessage": "Hi! How can I help?",
    "inputPlaceholder": "Ask me anything...",
    "listeningMessage": "Listening...",
    "initSuggestions": [
      { "label": "Weather", "query": "How\\'s the Weather today?" },
      { "label": "Toss a coin", "query": "Toss a coin" },
      { "label": "What can you do?", "query": "What can you do?" }
    ]
  },
  "en-GB": {
    "isSdkLanguage": true,
    "langName": "English (Great Britain)",
    "welcomeMessage": "Hi! How can I help?",
    "inputPlaceholder": "Ask me anything...",
    "listeningMessage": "Listening...",
    "initSuggestions": [
      { "label": "Weather", "query": "How\\'s the Weather today?" },
      { "label": "Toss a coin", "query": "Toss a coin" },
      { "label": "What can you do?", "query": "What can you do?" }
    ]
  },
  "en-IN": {
    "isSdkLanguage": true,
    "langName": "English (India)",
    "welcomeMessage": "Hi! How can I help?",
    "inputPlaceholder": "Ask me anything...",
    "listeningMessage": "Listening...",
    "initSuggestions": [
      { "label": "Weather", "query": "How\\'s the Weather today?" },
      { "label": "Toss a coin", "query": "Toss a coin" },
      { "label": "What can you do?", "query": "What can you do?" }
    ]
  },
  "en-US": {
    "isSdkLanguage": true,
    "langName": "English (United States)",
    "welcomeMessage": "Hi! How can I help?",
    "inputPlaceholder": "Ask me anything...",
    "listeningMessage": "Listening...",
    "initSuggestions": [
      { "label": "Weather", "query": "How\\'s the Weather today?" },
      { "label": "Toss a coin", "query": "Toss a coin" },
      { "label": "What can you do?", "query": "What can you do?" }
    ]
  },
  "es-ES": {
    "isSdkLanguage": true,
    "langName": "Español (España)",
    "welcomeMessage": "¡Hola! ¿Cómo puedo ayudar?",
    "inputPlaceholder": "Pregúntame lo que sea...",
    "listeningMessage": "Escuchando...",
    "initSuggestions": [
      { "label": "Clima", "query": "¿Cómo está el clima hoy?" },
      { "label": "Tirar una moneda", "query": "Lanza una moneda" },
      { "label": "¿Qué puedes hacer?", "query": "¿Qué puedes hacer?" }
    ]
  },
  "es-MX": {
    "isSdkLanguage": true,
    "langName": "Español (México)",
    "welcomeMessage": "¡Hola! ¿En qué te puedo ayudar?",
    "inputPlaceholder": "Pregúntame lo que sea...",
    "listeningMessage": "Escuchando...",
    "initSuggestions": [
      { "label": "Clima", "query": "¿Cómo está el clima hoy?" },
      { "label": "Tirar una moneda", "query": "Tirar una moneda" },
      { "label": "¿Qué puedes hacer?", "query": "¿Qué puedes hacer?" }
    ]
  },
  "fr-CA": {
    "isSdkLanguage": true,
    "langName": "Français (Canada)",
    "welcomeMessage": "Salut! Comment puis-je aider?",
    "inputPlaceholder": "Demande-moi n'importe quoi...",
    "listeningMessage": "Écoute...",
    "initSuggestions": [
      { "label": "Temps", "query": "Quel temps fait-il aujourd\\'hui?" },
      { "label": "Un tirage au sort", "query": "Un tirage au sort" },
      { "label": "Que pouvez-vous faire?", "query": "Que pouvez-vous faire?" }
    ]
  },
  "fr-FR": {
    "isSdkLanguage": true,
    "langName": "Français (France)",
    "welcomeMessage": "Salut! Comment puis-je aider?",
    "inputPlaceholder": "Demande-moi n'importe quoi...",
    "listeningMessage": "Écoute...",
    "initSuggestions": [
      { "label": "Temps", "query": "Quel temps fait-il aujourd\\'hui?" },
      { "label": "Un tirage au sort", "query": "Un tirage au sort" },
      { "label": "Que pouvez-vous faire?", "query": "Que pouvez-vous faire?" }
    ]
  },
  "it-IT": {
    "isSdkLanguage": true,
    "langName": "Italiano (Italia)",
    "welcomeMessage": "Ciao! Come posso aiutare?",
    "inputPlaceholder": "Chiedimi qualunque cosa...",
    "listeningMessage": "Ascoltando...",
    "initSuggestions": [
      { "label": "Tempo metereologico", "query": "Com\\'è il tempo oggi?" },
      { "label": "Lancia una moneta", "query": "Lancia una moneta" },
      { "label": "Cosa sai fare?", "query": "Cosa sai fare?" }
    ]
  },
  "ja-JP": {
    "isSdkLanguage": true,
    "langName": "日本語（日本）",
    "welcomeMessage": "こんにちは！ 手伝いましょうか？",
    "inputPlaceholder": "何でも聞いてください...",
    "listeningMessage": "聞いています...",
    "initSuggestions": [
      { "label": "天気", "query": "今日の天気は？" },
      { "label": "コインを投げて", "query": "コインを投げて" },
      { "label": "何ができる？", "query": "何ができる？" }
    ]
  },
  "ko-KR": {
    "isSdkLanguage": true,
    "langName": "한국어 (대한민국)",
    "welcomeMessage": "안녕하세요! 내가 어떻게 도움이 될 수 있습니다?",
    "inputPlaceholder": "무엇이든 물어보세요...",
    "listeningMessage": "청취...",
    "initSuggestions": [
      { "label": "날씨", "query": "오늘의 날씨는 어떻습니까?" },
      { "label": "동전을 던지세요", "query": "동전을 던지세요" },
      { "label": "당신은 무엇을 할 수 있나요?", "query": "당신은 무엇을 할 수 있나요?" }
    ]
  },
  "nl-NL": {
    "isSdkLanguage": false,
    "langName": "Nederlands (Nederland)",
    "welcomeMessage": "Hallo! Hoe kan ik je helpen?",
    "inputPlaceholder": "Vraag me iets...",
    "listeningMessage": "Aan het luisteren...",
    "initSuggestions": [
      { "label": "Weer", "query": "Wat voor weer is het?" },
      { "label": "Gooi een munt", "query": "Gooi een munt" },
      { "label": "Wat kun je doen?", "query": "Wat kun je doen?" }
    ]
  },
  "pt-BR": {
    "isSdkLanguage": true,
    "langName": "Português (Brasil)",
    "welcomeMessage": "Oi! Como posso ajudar?",
    "inputPlaceholder": "Me pergunte qualquer coisa...",
    "listeningMessage": "Ouvindo...",
    "initSuggestions": [
      { "label": "Clima", "query": "Como está o tempo hoje?" },
      { "label": "Atirar uma moeda", "query": "Atirar uma moeda" },
      { "label": "O que você pode fazer?", "query": "O que você pode fazer?" }
    ]
  }
}

module.exports = supportedLanguages;
