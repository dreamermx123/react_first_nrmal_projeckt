import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
    // Применяем конфигурацию ко всем файлам с указанными расширениями:
    // .js, .mjs, .cjs для JavaScript и .ts, .tsx для TypeScript.
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    // 2. Настраиваем параметры языка, парсер, глобальные переменные и возможности ECMAScript.
    {
        languageOptions: {

            // Определяем глобальные переменные
            globals: {
                ...globals.browser, // Добавляем стандартные глобальные переменные браузера
                ...globals.node,    // глобалы для Node, такие как process, __dirname и т.д.

                __IS_DEV__: true,   // Пользовательская глобальная переменная: разрешена для записи (или только для чтения в зависимости от применения)
                __dirname: "readonly", // Глобальная переменная Node.js __dirname, задаётся как неизменяемая (readonly)
                jest: true
            },
        },
        settings: {
            // Определяем настройки для плагина React
            react: {
                // Автоматически определяет версию React, используя пакет, установленный в проекте
                version: "detect",
            },
        },
    // 4. Определяем окружения проекта.
    // env: {
    //   //   node: true,    // Включаем окружение Node.js (чтобы ESLint знал про глобальные переменные Node)
    //   //   browser: true, // Включаем окружение браузера, если проект работает в браузере
    //   jest: true
    // },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    // 8. Определяем наши собственные правила ESLint.
    {
        rules: {
            // Настраиваем правила отступов для JSX: 4 пробела.
            "react/jsx-indent": ["error", 4],
            "react/jsx-indent-props": ["error", 4],
            // Основное правило отступов для JavaScript: 4 пробела с дополнительным отступом для SwitchCase.
            indent: ["error", 4, { SwitchCase: 1 }],
            // Разрешены файлы с JSX-синтаксисом только с указанными расширениями.
            "react/jsx-filename-extension": [
                "error",
                { extensions: [".js", ".jsx", ".tsx"] },
            ],
            // Отключаем некоторые правила, которые могут конфликтовать с нашим стилем или не нужны:
            "import/no-unresolved": "off",            // Отключаем проверку на неразрешённые импорты
            "import/prefer-default-export": "off",      // Отключаем требование использовать default export
            "no-unused-vars": "warn",                   // Предупреждаем об неиспользуемых переменных
            "react/require-default-props": "off",        // Отключаем требование наличия defaultProps для необязательных props
            "react/react-in-jsx-scope": "off",           // Отключаем правило, требующее импорт React, т.к. используется новый JSX-трансформер
            "react/jsx-props-no-spreading": "warn",      // Предупреждение при использовании спреда для props
            "react/function-component-definition": "off",// Отключаем требование определять компоненты определённым способом
            "no-shadow": "off",                         // Отключаем проверку на теневание переменных
            "import/extensions": "off",                 // Отключаем проверку расширений файлов в импортируемых модулях
            "import/no-extraneous-dependencies": "off", // Отключаем проверку на неуказанные зависимости
            "no-underscore-dangle": "off",              // Отключаем правило, запрещающее нижнее подчеркивание в именах переменных

        }
    }
];