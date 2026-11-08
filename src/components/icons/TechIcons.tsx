"use client";

import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export default function TechIcon({ name, className = "w-10 h-10" }: TechIconProps) {
  const norm = name.toLowerCase().trim();

  // 1. Angular
  if (norm.includes("angular")) {
    return (
      <svg className={className} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2" fill="#DD0031" />
        <polygon points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2" fill="#C3002F" />
        <path d="M125,52.1L66.8,182.6H89.2L100.8,153.4H125H149.2L160.8,182.6H183.2L125,52.1ZM141.7,133.1H125H108.3L125,92.7L141.7,133.1Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 2. React / React Native
  if (norm.includes("react")) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // 3. Next.js
  if (norm.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="88" fill="#0A0A0A" />
        <path
          d="M149.508 157.064L69.1418 54H54V125.928H66.2736V69.456L139.965 164.385C143.327 162.152 146.524 159.699 149.508 157.064Z"
          fill="url(#next_paint0)"
        />
        <rect x="115" y="54" width="12" height="72" fill="url(#next_paint1)" />
        <defs>
          <linearGradient id="next_paint0" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="next_paint1" x1="121" y1="54" x2="121" y2="106" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 4. TypeScript
  if (norm.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="20" fill="#3178C6" />
        <path
          d="M71.7 54.3H40.2V65.6H50V105.8H61.9V65.6H71.7V54.3ZM95.8 74.4C95.8 69.8 94.2 66.3 90.9 63.8C87.6 61.3 82.8 59.8 76.5 59.3V70.7C79.4 71.1 81.6 71.9 83 73.1C84.4 74.3 85.1 76 85.1 78.2C85.1 80.5 84.3 82.2 82.7 83.4C81.1 84.6 78.8 85.2 75.8 85.2C72.8 85.2 70.1 84.5 67.7 83.1V95C70.4 96.2 73.9 96.8 78.2 96.8C85.5 96.8 91.1 94.7 95 90.5C98.9 86.3 100.8 80.9 100.8 74.4H95.8Z"
          fill="white"
        />
      </svg>
    );
  }

  // 5. Vue
  if (norm.includes("vue")) {
    return (
      <svg className={className} viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg">
        <path d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z" fill="#41B883" />
        <path d="M0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z" fill="#35495E" />
        <path d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z" fill="#41B883" />
      </svg>
    );
  }

  // 6. HTML5
  if (norm.includes("html")) {
    return (
      <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M413.6 62.4H98.4L132 437.6 256 472l124-34.4 33.6-375.2z" fill="#E34F26" />
        <path d="M256 439.2l99.2-27.2 27.2-311.2H256v338.4z" fill="#EF652A" />
        <path d="M256 176h64l4.8-48H187.2l14.4 144H256v-48h-50.4l-4.8-48H256zm0 144l-44.8-12-3.2-36h-48l6.4 72 89.6 24V320z" fill="#ECECEC" />
        <path d="M256 176v48h50.4l-4.8 52-45.6 12v49.6l89.6-24 12.8-137.6H256z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 7. Tailwind
  if (norm.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 10C16 10 11 15 9 20C12 18 15 17 18 18C20 18.7 21.4 20.2 23 21.8C25.5 24.5 28.5 27.5 35 27.5C43 27.5 48 22.5 50 17.5C47 19.5 44 20.5 41 19.5C39 18.8 37.6 17.3 36 15.7C33.5 13 30.5 10 24 10ZM13 22.5C5 22.5 0 27.5 -2 32.5C1 30.5 4 29.5 7 30.5C9 31.2 10.4 32.7 12 34.3C14.5 37 17.5 40 24 40C32 40 37 35 39 30C36 32 33 33 30 32C28 31.3 26.6 29.8 25 28.2C22.5 25.5 19.5 22.5 13 22.5Z"
          fill="#38BDF8"
        />
      </svg>
    );
  }

  // 8. Svelte
  if (norm.includes("svelte")) {
    return (
      <svg className={className} viewBox="0 0 98.1 118" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M89.7 18.2C79.8 4.7 61.5-2.2 46.2 1.3 34.8 3.9 25 11.7 19.5 22.2c-7.9 15.2-6.5 33.6 3.4 47.4-2.8 4.4-4.8 9.3-5.8 14.4-3.5 17.4 3.7 35.6 18.2 45.4 15.9 10.7 37.1 10.9 53.2.7 13.9-8.8 22.1-24.1 21.6-40.4-.3-10.4-4.5-20.4-11.8-27.9 1.1-2.4 1.9-5 2.4-7.6 3.4-17.5-3.8-35.6-18.4-45.5L89.7 18.2z"
          fill="#FF3E00"
        />
        <path
          d="M40.8 102.5c-9.5-6.4-14.2-18.3-11.9-29.6.7-3.4 2.1-6.6 4.1-9.5l2.2 1.8c6.9 10.7 18.6 16.6 31.1 15.6 6.3-.5 12.3-2.9 17.1-6.9 7-5.9 10.3-15.1 8.8-24.1-1.3-8-6.9-14.7-14.5-17.4-4.3-1.5-8.9-1.9-13.4-1.2-4.5.7-9.5 2.7-13.5 5.5l-2.4 1.7-11.8-7.9 2.2-2.1c8.3-8 19.6-12.4 31-12 11.4.3 22.1 5.7 29.1 14.8 7.3 9.4 9.6 22 6 33.2-3.3 10.3-11.1 18.7-21.2 22.8-5.3 2.1-11 3.1-16.7 2.8-7-.3-13.8-2.6-19.4-6.3l-2.3-1.6z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 9. Flutter
  if (norm.includes("flutter")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M78 20L28 70L42 84L106 20H78Z" fill="#02569B" />
        <path d="M60 84L42 102L56 116L88 84H60Z" fill="#0175C2" />
        <path d="M88 84L60 112L72 124L114 84H88Z" fill="#29B6F6" />
      </svg>
    );
  }

  // 10. Swift
  if (norm.includes("swift")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#F05138" />
        <path
          d="M102 38C98 52 86 64 86 64C96 56 102 44 102 44C102 44 98 76 74 94C56 108 36 108 26 108C42 98 50 88 50 88C32 90 22 78 22 78C38 78 46 68 46 68C26 66 24 44 24 44C34 50 42 48 42 48C28 36 34 22 34 22C46 36 62 44 76 46C76 46 72 38 72 32C72 20 86 14 86 14C80 24 84 32 84 32C92 28 98 24 98 24C94 30 90 34 88 36C94 36 102 38 102 38Z"
          fill="white"
        />
      </svg>
    );
  }

  // 11. Kotlin
  if (norm.includes("kotlin")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M112 16H16V112H112L64 64L112 16Z" fill="url(#kt_grad)" />
        <defs>
          <linearGradient id="kt_grad" x1="16" y1="16" x2="112" y2="112" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7F52FF" />
            <stop offset="0.5" stopColor="#C711E1" />
            <stop offset="1" stopColor="#E4485D" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 12. Android
  if (norm.includes("android")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 38L32 24M88 38L96 24" stroke="#3DDC84" strokeWidth="5" strokeLinecap="round" />
        <path d="M26 64C26 43 43 26 64 26C85 26 102 43 102 64H26Z" fill="#3DDC84" />
        <circle cx="48" cy="48" r="4" fill="white" />
        <circle cx="80" cy="48" r="4" fill="white" />
        <rect x="26" y="70" width="76" height="42" rx="10" fill="#3DDC84" />
      </svg>
    );
  }

  // 13. Dart
  if (norm.includes("dart")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 24L88 24L104 40L40 104L24 88V24Z" fill="#01579B" />
        <path d="M40 40L104 40L72 104L40 72V40Z" fill="#00B0FF" />
        <path d="M40 72L72 104L40 104V72Z" fill="#29B6F6" />
      </svg>
    );
  }

  // 14. Ionic
  if (norm.includes("ionic")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="50" stroke="#3880FF" strokeWidth="12" />
        <circle cx="64" cy="64" r="18" fill="#3880FF" />
      </svg>
    );
  }

  // 15. Java
  if (norm.includes("java")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44 80C44 80 40 88 56 90C74 92 84 84 84 84C84 84 80 87 68 87C54 87 44 80 44 80Z" fill="#5382A1" />
        <path d="M40 92C40 92 36 100 56 102C78 104 92 94 92 94C92 94 86 98 72 98C54 98 40 92 40 92Z" fill="#E76F00" />
        <path d="M66 22C66 22 74 34 58 50C46 62 52 70 52 70C52 70 46 64 52 54C60 42 66 22 66 22Z" fill="#E76F00" />
        <path d="M78 34C78 34 84 44 72 58C62 68 66 76 66 76C66 76 60 70 66 60C74 48 78 34 78 34Z" fill="#5382A1" />
        <path d="M34 104C34 104 50 114 82 114C106 114 116 106 116 106C116 106 104 110 82 110C56 110 34 104 34 104Z" fill="#5382A1" />
      </svg>
    );
  }

  // 16. Python
  if (norm.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M63 16C40 16 41 26 41 26V37H65V41H30C18 41 12 50 12 63C12 76 19 83 29 83H37V72C37 59 47 49 60 49H83C90 49 96 43 96 36C96 28 92 16 63 16ZM52 26C55 26 58 29 58 32C58 35 55 38 52 38C49 38 46 35 46 32C46 29 49 26 52 26Z"
          fill="#3776AB"
        />
        <path
          d="M65 112C88 112 87 102 87 102V91H63V87H98C110 87 116 78 116 65C116 52 109 45 99 45H91V56C91 69 81 79 68 79H45C38 79 32 85 32 92C32 100 36 112 65 112ZM76 102C73 102 70 99 70 96C70 93 73 90 76 90C79 90 82 93 82 96C82 99 79 102 76 102Z"
          fill="#FFD43B"
        />
      </svg>
    );
  }

  // 17. OpenAI
  if (norm.includes("openai")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#0A0A0C" />
        <path
          d="M64 28C68 28 72 30 74 34L86 54C87 56 88 58 90 59L108 64C112 65 114 69 114 73C114 77 111 81 107 82L86 88C84 89 82 91 81 93L76 111C75 115 71 117 67 117C63 117 59 114 58 110L52 90C51 88 49 86 47 85L29 80C25 79 23 75 23 71C23 67 26 63 30 62L51 56C53 55 55 53 56 51L61 33C62 29 66 28 64 28Z"
          stroke="#10A37F"
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle cx="64" cy="64" r="8" fill="#10A37F" />
      </svg>
    );
  }

  // 18. TensorFlow
  if (norm.includes("tensorflow")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 16L24 39V75L40 66V51L64 64V16Z" fill="#E535AB" />
        <path d="M64 16L104 39V75L88 66V51L64 64V16Z" fill="#FF6F00" />
        <path d="M64 64L40 78V112L64 98V64Z" fill="#FF9100" />
        <path d="M64 64L88 78V112L64 98V64Z" fill="#FFA726" />
      </svg>
    );
  }

  // 19. PyTorch
  if (norm.includes("pytorch")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M74 20L64 30C80 40 88 56 86 72C84 88 72 100 56 102C40 104 26 94 22 78C18 62 26 46 40 38L36 28C18 38 8 60 12 82C18 104 36 118 58 116C80 114 96 98 98 76C100 56 90 34 74 20Z"
          fill="#EE4C2C"
        />
        <circle cx="76" cy="36" r="6" fill="#EE4C2C" />
      </svg>
    );
  }

  // 20. LangChain
  if (norm.includes("langchain")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#002D2B" />
        <circle cx="50" cy="50" r="16" stroke="#22C55E" strokeWidth="6" />
        <circle cx="78" cy="78" r="16" stroke="#22C55E" strokeWidth="6" />
        <line x1="60" y1="60" x2="68" y2="68" stroke="#22C55E" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  // 21. Hugging Face
  if (norm.includes("hugging")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="48" fill="#FFD21E" />
        <circle cx="48" cy="56" r="6" fill="#1C1B1F" />
        <circle cx="80" cy="56" r="6" fill="#1C1B1F" />
        <path d="M48 76C54 84 74 84 80 76" stroke="#1C1B1F" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="36" cy="68" r="4" fill="#FF8A00" opacity="0.6" />
        <circle cx="92" cy="68" r="4" fill="#FF8A00" opacity="0.6" />
      </svg>
    );
  }

  // 22. FastAPI
  if (norm.includes("fastapi")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="54" fill="#059669" />
        <path d="M68 28L44 68H64L60 100L84 60H64L68 28Z" fill="white" />
      </svg>
    );
  }

  // 23. Scikit-learn
  if (norm.includes("scikit")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="44" cy="48" r="22" fill="#3499CD" opacity="0.8" />
        <circle cx="78" cy="72" r="24" fill="#F89939" opacity="0.8" />
        <circle cx="78" cy="40" r="14" fill="#2E7DB5" opacity="0.7" />
      </svg>
    );
  }

  // 24. PostgreSQL
  if (norm.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64 20C40 20 28 36 28 54C28 72 36 92 50 104C52 106 58 108 64 108C70 108 76 106 78 104C92 92 100 72 100 54C100 36 88 20 64 20ZM46 54C46 50 49 46 53 46C57 46 60 50 60 54C60 58 57 62 53 62C49 62 46 58 46 54ZM82 54C82 58 79 62 75 62C71 62 68 58 68 54C68 50 71 46 75 46C79 46 82 50 82 54Z"
          fill="#336791"
        />
      </svg>
    );
  }

  // 25. MongoDB
  if (norm.includes("mongo")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 12C64 12 36 46 36 78C36 102 52 116 64 124C76 116 92 102 92 78C92 46 64 12 64 12Z" fill="#47A248" />
        <path d="M64 12V124C60 122 48 112 48 84C48 56 64 12 64 12Z" fill="#499D4A" />
      </svg>
    );
  }

  // 26. MySQL
  if (norm.includes("mysql")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#00758F" />
        <path
          d="M86 44C78 34 66 32 54 38C40 46 34 64 42 78C50 92 72 96 86 86C78 84 72 78 72 70C72 60 80 54 86 44Z"
          fill="#F29111"
        />
        <circle cx="54" cy="50" r="3" fill="white" />
      </svg>
    );
  }

  // 27. Redis
  if (norm.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 22L104 42L64 62L24 42L64 22Z" fill="#D82C20" />
        <path d="M24 42L64 62V82L24 62V42Z" fill="#A32219" />
        <path d="M104 42L64 62V82L104 62V42Z" fill="#BD261C" />
        <path d="M24 64L64 84V104L24 84V64Z" fill="#A32219" />
        <path d="M104 64L64 84V104L104 84V64Z" fill="#BD261C" />
      </svg>
    );
  }

  // 28. SQLite
  if (norm.includes("sqlite")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 36C24 24 38 20 64 20C90 20 104 24 104 36V92C104 104 90 108 64 108C38 108 24 104 24 92V36Z"
          fill="#003B57"
        />
        <ellipse cx="64" cy="36" rx="40" ry="16" fill="#005B87" />
        <path d="M34 56C42 64 86 64 94 56" stroke="white" strokeWidth="4" fill="none" />
        <path d="M34 76C42 84 86 84 94 76" stroke="white" strokeWidth="4" fill="none" />
      </svg>
    );
  }

  // 29. DynamoDB
  if (norm.includes("dynamo")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#2E27AD" />
        <ellipse cx="64" cy="40" rx="36" ry="14" fill="#4B44E0" />
        <path d="M28 40V70C28 78 44 84 64 84C84 84 100 78 100 70V40" stroke="#00D4FF" strokeWidth="6" fill="none" />
        <path d="M28 70V92C28 100 44 106 64 106C84 106 100 100 100 92V70" stroke="#00D4FF" strokeWidth="6" fill="none" />
      </svg>
    );
  }

  // 30. Firebase
  if (norm.includes("firebase")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 92L46 22L60 48L28 92Z" fill="#FFA000" />
        <path d="M28 92L96 92L84 32L64 62L28 92Z" fill="#F57C00" />
        <path d="M60 48L84 32L100 92L60 48Z" fill="#FFCA28" />
      </svg>
    );
  }

  // 31. Supabase
  if (norm.includes("supabase")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#1C1C1C" />
        <path
          d="M68 20L28 74H64L60 108L100 54H64L68 20Z"
          fill="url(#supa_grad)"
        />
        <defs>
          <linearGradient id="supa_grad" x1="28" y1="20" x2="100" y2="108" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3ECF8E" />
            <stop offset="1" stopColor="#1E8E5A" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // 32. Node.js
  if (norm.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64 12L112 39.7V95.3L64 123L16 95.3V39.7L64 12Z" fill="#339933" />
        <path d="M64 26L98 46V86L64 106L30 86V46L64 26Z" fill="#026E00" />
        <path d="M64 42L82 53V75L64 86L46 75V53L64 42Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 33. PHP
  if (norm.includes("php")) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="64" cy="64" rx="60" ry="34" fill="#777BB4" />
        <path
          d="M36 50H48C54 50 58 53 58 58C58 63 54 66 48 66H42L38 78H30L36 50ZM44 56L42 61H47C49 61 51 60 51 58C51 56 49 56 47 56H44ZM62 50H70L65 66H75L71 78H55L62 50ZM84 50H96C102 50 106 53 106 58C106 63 102 66 96 66H90L86 78H78L84 50ZM92 56L90 61H95C97 61 99 60 99 58C99 56 97 56 95 56H92Z"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  // 34. Laravel
  if (norm.includes("laravel")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#FF2D20" />
        <path
          d="M32 78L64 96L96 78V46L64 28L32 46V78ZM64 42L82 52L64 62L46 52L64 42ZM44 60L58 68V84L44 76V60ZM84 60V76L70 84V68L84 60Z"
          fill="white"
        />
      </svg>
    );
  }

  // 35. Go / Golang
  if (norm.includes("go")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#00ADD8" />
        <path
          d="M26 64C26 50 36 40 50 40C60 40 68 46 72 54H60C58 50 54 48 50 48C42 48 36 54 36 64C36 74 42 80 50 80C56 80 60 76 61 70H50V62H72V76C68 83 59 88 50 88C36 88 26 78 26 64ZM78 64C78 50 88 40 102 40C116 40 126 50 126 64C126 78 116 88 102 88C88 88 78 78 78 64ZM116 64C116 54 110 48 102 48C94 48 88 54 88 64C88 74 94 80 102 80C110 80 116 74 116 64Z"
          fill="white"
        />
      </svg>
    );
  }

  // 36. .NET
  if (norm.includes(".net") || norm.includes("dotnet")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#512BD4" />
        <path d="M38 90V38L62 76V38H76V90L52 52V90H38Z" fill="white" />
        <circle cx="94" cy="84" r="7" fill="#00E5FF" />
      </svg>
    );
  }

  // 37. Ruby on Rails
  if (norm.includes("rails") || norm.includes("ruby")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#CC0000" />
        <path d="M32 94C32 54 58 34 96 34V48C68 48 48 62 48 94H32Z" fill="white" />
        <path d="M54 94C54 68 70 56 96 56V68C78 68 66 76 66 94H54Z" fill="white" opacity="0.8" />
        <path d="M72 94C72 80 82 76 96 76V86C86 86 82 89 82 94H72Z" fill="white" opacity="0.6" />
      </svg>
    );
  }

  // 38. Payload CMS
  if (norm.includes("payload")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#0A0A0A" />
        <path d="M40 34H68C78 34 86 42 86 52C86 62 78 70 68 70H54V94H40V34Z" fill="white" />
        <path d="M54 46V58H66C70 58 74 56 74 52C74 48 70 46 66 46H54Z" fill="#0A0A0A" />
        <circle cx="88" cy="94" r="7" fill="#FF7120" />
      </svg>
    );
  }

  // 39. WordPress
  if (norm.includes("wordpress")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="54" fill="#21759B" />
        <circle cx="64" cy="64" r="48" stroke="white" strokeWidth="4" />
        <path
          d="M32 64C32 76 38 86 46 92L34 58C33 60 32 62 32 64ZM82 62C82 54 76 50 70 50C62 50 56 56 56 62C56 68 62 72 68 76L76 80L80 72C81 68 82 65 82 62ZM62 98L74 62L82 88C78 94 70 98 62 98Z"
          fill="white"
        />
      </svg>
    );
  }

  // 40. Shopify
  if (norm.includes("shopify")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M84 26L74 20L64 24L70 30L84 26Z" fill="#95BF47" />
        <path
          d="M72 30L62 33L48 94L76 102L100 94L72 30Z"
          fill="#7AB55C"
        />
        <path
          d="M62 33L36 38L24 90L48 94L62 33Z"
          fill="#5E8E3E"
        />
        <path
          d="M66 54C64 50 60 48 56 48C50 48 46 52 46 58C46 72 68 70 68 82C68 88 62 92 56 92C50 92 46 88 44 84L50 80C52 84 54 86 56 86C58 86 62 84 62 80C62 70 42 70 42 58C42 48 50 42 58 42C64 42 68 46 70 50L66 54Z"
          fill="white"
        />
      </svg>
    );
  }

  // 41. Open Journal Systems (OJS)
  if (norm.includes("open journal") || norm.includes("ojs")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#003366" />
        <circle cx="64" cy="54" r="26" stroke="#F58220" strokeWidth="8" fill="none" />
        <rect x="58" y="50" width="12" height="42" rx="4" fill="#F58220" />
        <circle cx="64" cy="54" r="6" fill="white" />
      </svg>
    );
  }

  // 42. Strapi
  if (norm.includes("strapi")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#4945FF" />
        <path d="M40 38H68C80 38 88 46 88 58C88 70 80 78 68 78H54V94H40V38Z" fill="white" />
        <path d="M54 50V66H66C72 66 76 62 76 58C76 54 72 50 66 50H54Z" fill="#4945FF" />
      </svg>
    );
  }

  // 43. Sanity
  if (norm.includes("sanity")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#F03E2F" />
        <path
          d="M86 46C82 40 74 36 64 36C48 36 38 46 38 58C38 74 66 72 66 82C66 86 62 88 56 88C48 88 42 84 38 78L32 86C38 94 48 98 58 98C74 98 84 88 84 76C84 60 56 62 56 52C56 48 60 46 66 46C72 46 78 48 82 52L86 46Z"
          fill="white"
        />
      </svg>
    );
  }

  // 44. Webflow
  if (norm.includes("webflow")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#146EF5" />
        <path
          d="M98 42L78 86H64L54 62L44 86H30L50 42H64L74 66L84 42H98Z"
          fill="white"
        />
      </svg>
    );
  }

  // 45. Ghost
  if (norm.includes("ghost")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#15171A" />
        <path
          d="M40 38C40 28 50 20 64 20C78 20 88 28 88 38V96L76 88L64 96L52 88L40 96V38Z"
          fill="white"
        />
        <circle cx="54" cy="46" r="4" fill="#15171A" />
        <circle cx="74" cy="46" r="4" fill="#15171A" />
      </svg>
    );
  }

  // 46. Docker
  if (norm.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#2496ED" />
        <rect x="36" y="54" width="10" height="10" fill="white" />
        <rect x="48" y="54" width="10" height="10" fill="white" />
        <rect x="60" y="54" width="10" height="10" fill="white" />
        <rect x="48" y="42" width="10" height="10" fill="white" />
        <rect x="60" y="42" width="10" height="10" fill="white" />
        <path
          d="M24 68C24 68 34 94 68 94C94 94 106 78 106 68H24Z"
          fill="white"
        />
      </svg>
    );
  }

  // 47. Kubernetes
  if (norm.includes("kubernetes")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="54" fill="#326CE5" />
        <circle cx="64" cy="64" r="28" stroke="white" strokeWidth="6" fill="none" />
        <circle cx="64" cy="64" r="8" fill="white" />
        <line x1="64" y1="20" x2="64" y2="40" stroke="white" strokeWidth="6" />
        <line x1="64" y1="88" x2="64" y2="108" stroke="white" strokeWidth="6" />
        <line x1="20" y1="64" x2="40" y2="64" stroke="white" strokeWidth="6" />
        <line x1="88" y1="64" x2="108" y2="64" stroke="white" strokeWidth="6" />
      </svg>
    );
  }

  // 48. AWS
  if (norm.includes("aws")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#232F3E" />
        <text x="32" y="60" fill="white" fontSize="24" fontWeight="bold" fontFamily="monospace">AWS</text>
        <path
          d="M32 74C48 88 80 88 96 74"
          stroke="#FF9900"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <polygon points="98,72 90,74 94,82" fill="#FF9900" />
      </svg>
    );
  }

  // 49. Google Cloud
  if (norm.includes("google") || norm.includes("gcp")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#FFFFFF" stroke="#E2E2DC" strokeWidth="2" />
        <path d="M46 64C46 54 54 46 64 46C72 46 78 50 81 56C84 55 87 54 90 54C98 54 104 60 104 68C104 76 98 82 90 82H44C35 82 28 75 28 66C28 58 34 52 42 50C44 50 46 50 46 52" stroke="#4285F4" strokeWidth="8" fill="none" />
      </svg>
    );
  }

  // 50. Vercel
  if (norm.includes("vercel")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#0A0A0C" />
        <polygon points="64,28 104,96 24,96" fill="white" />
      </svg>
    );
  }

  // 51. Cloudflare
  if (norm.includes("cloudflare")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M92 56C90 44 80 34 68 34C58 34 50 40 46 48C42 46 38 46 34 48C24 52 18 62 20 72C16 74 14 78 14 84C14 92 20 98 28 98H96C106 98 114 90 114 80C114 70 106 62 96 60C96 58 94 56 92 56Z"
          fill="#F38020"
        />
        <path d="M96 62C92 62 88 64 86 68L80 92H104C110 92 114 86 114 80C114 70 106 62 96 62Z" fill="#FAAE40" />
      </svg>
    );
  }

  // 52. GitHub Actions
  if (norm.includes("github")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#181717" />
        <circle cx="44" cy="44" r="12" fill="#2088FF" />
        <circle cx="84" cy="44" r="12" fill="#2088FF" />
        <circle cx="64" cy="84" r="12" fill="#2088FF" />
        <path d="M44 44L64 84L84 44" stroke="white" strokeWidth="6" />
      </svg>
    );
  }

  // 53. Linux
  if (norm.includes("linux")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="24" fill="#FCC624" />
        <ellipse cx="64" cy="68" rx="30" ry="36" fill="#000000" />
        <ellipse cx="64" cy="74" rx="20" ry="26" fill="#FFFFFF" />
        <circle cx="56" cy="48" r="4" fill="#FFFFFF" />
        <circle cx="72" cy="48" r="4" fill="#FFFFFF" />
        <polygon points="64,54 58,62 70,62" fill="#FFA500" />
      </svg>
    );
  }

  // 54. DigitalOcean
  if (norm.includes("digitalocean") || norm.includes("digital ocean")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64 20C39.7 20 20 39.7 20 64C20 88.3 39.7 108 64 108C88.3 108 108 88.3 108 64H86C86 76.2 76.2 86 64 86C51.8 86 42 76.2 42 64C42 51.8 51.8 42 64 42V20Z"
          fill="#0080FF"
        />
        <rect x="22" y="86" width="16" height="16" fill="#0080FF" />
        <rect x="12" y="104" width="10" height="10" fill="#0080FF" />
        <rect x="6" y="94" width="8" height="8" fill="#0080FF" />
      </svg>
    );
  }

  // 55. LLMs (Large Language Models)
  if (norm.includes("llm") || norm.includes("large language")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M64 16L72 48L104 56L72 64L64 96L56 64L24 56L56 48L64 16Z"
          fill="#FF7120"
        />
        <path
          d="M96 80L100 96L116 100L100 104L96 120L92 104L76 100L92 96L96 80Z"
          fill="#FFB020"
        />
        <circle cx="36" cy="96" r="8" fill="#FF7120" />
      </svg>
    );
  }

  // 56. AI Agents
  if (norm.includes("ai agent") || norm.includes("agents") || norm.includes("agentic")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="64" cy="64" r="32" stroke="#FF7120" strokeWidth="6" fill="none" />
        <circle cx="64" cy="64" r="12" fill="#FF7120" />
        <circle cx="64" cy="20" r="8" fill="#00F0FF" />
        <circle cx="108" cy="64" r="8" fill="#00F0FF" />
        <circle cx="64" cy="108" r="8" fill="#00F0FF" />
        <circle cx="20" cy="64" r="8" fill="#00F0FF" />
        <line x1="64" y1="28" x2="64" y2="52" stroke="#00F0FF" strokeWidth="3" strokeDasharray="4 2" />
        <line x1="100" y1="64" x2="76" y2="64" stroke="#00F0FF" strokeWidth="3" strokeDasharray="4 2" />
        <line x1="64" y1="100" x2="64" y2="76" stroke="#00F0FF" strokeWidth="3" strokeDasharray="4 2" />
        <line x1="28" y1="64" x2="52" y2="64" stroke="#00F0FF" strokeWidth="3" strokeDasharray="4 2" />
      </svg>
    );
  }

  // 57. Model Context Protocol (MCP)
  if (norm.includes("mcp") || norm.includes("context protocol")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="64,24 104,48 104,80 64,104 24,80 24,48" stroke="#FF7120" strokeWidth="6" fill="none" />
        <circle cx="64" cy="64" r="16" fill="#00F0FF" />
        <circle cx="64" cy="24" r="6" fill="#FFFFFF" />
        <circle cx="104" cy="48" r="6" fill="#FFFFFF" />
        <circle cx="104" cy="80" r="6" fill="#FFFFFF" />
        <circle cx="64" cy="104" r="6" fill="#FFFFFF" />
        <circle cx="24" cy="80" r="6" fill="#FFFFFF" />
        <circle cx="24" cy="48" r="6" fill="#FFFFFF" />
      </svg>
    );
  }

  // 58. API Integrations
  if (norm.includes("api") || norm.includes("integration") || norm.includes("rest")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="36" cy="64" r="14" fill="#FF7120" />
        <circle cx="92" cy="38" r="12" fill="#00F0FF" />
        <circle cx="92" cy="90" r="12" fill="#00F0FF" />
        <path d="M36 64L92 38" stroke="white" strokeWidth="4" />
        <path d="M36 64L92 90" stroke="white" strokeWidth="4" />
        <circle cx="64" cy="51" r="5" fill="white" />
        <circle cx="64" cy="77" r="5" fill="white" />
      </svg>
    );
  }

  // 59. Workflow Automation
  if (norm.includes("workflow") || norm.includes("automation")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="24" y="24" width="32" height="32" rx="8" fill="#FF7120" />
        <rect x="72" y="24" width="32" height="32" rx="8" fill="#00F0FF" />
        <rect x="48" y="72" width="32" height="32" rx="8" fill="#3DDC84" />
        <path d="M40 56V64H64V72" stroke="white" strokeWidth="4" fill="none" />
        <path d="M88 56V64H64V72" stroke="white" strokeWidth="4" fill="none" />
      </svg>
    );
  }

  // Fallback (Clean Transparent Chip, No Outer Opaque Box)
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="38" stroke="#FF7120" strokeWidth="5" strokeDasharray="6 4" fill="none" />
      <circle cx="64" cy="64" r="18" fill="#FF7120" fillOpacity="0.8" />
      <circle cx="64" cy="64" r="6" fill="#FFFFFF" />
    </svg>
  );
}
