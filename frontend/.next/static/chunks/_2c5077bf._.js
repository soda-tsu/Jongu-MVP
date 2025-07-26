(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "bar": "FormHistoryCreate-module__1Ftfgq__bar",
  "contador": "FormHistoryCreate-module__1Ftfgq__contador",
  "customButton": "FormHistoryCreate-module__1Ftfgq__customButton",
  "description": "FormHistoryCreate-module__1Ftfgq__description",
  "duoFlex": "FormHistoryCreate-module__1Ftfgq__duoFlex",
  "filledBar": "FormHistoryCreate-module__1Ftfgq__filledBar",
  "flexButton": "FormHistoryCreate-module__1Ftfgq__flexButton",
  "formHistoryCreate": "FormHistoryCreate-module__1Ftfgq__formHistoryCreate",
  "genderFlex": "FormHistoryCreate-module__1Ftfgq__genderFlex",
  "icon": "FormHistoryCreate-module__1Ftfgq__icon",
  "input": "FormHistoryCreate-module__1Ftfgq__input",
  "mainFlex": "FormHistoryCreate-module__1Ftfgq__mainFlex",
  "stepFormDescription": "FormHistoryCreate-module__1Ftfgq__stepFormDescription",
  "stepFourFlex": "FormHistoryCreate-module__1Ftfgq__stepFourFlex",
  "textArea": "FormHistoryCreate-module__1Ftfgq__textArea",
  "title": "FormHistoryCreate-module__1Ftfgq__title",
});
}}),
"[project]/src/app/Components/Select/Select.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "select": "Select-module__-xbVyW__select",
  "selectDescription": "Select-module__-xbVyW__selectDescription",
  "selectGender": "Select-module__-xbVyW__selectGender",
  "selectIconFlex": "Select-module__-xbVyW__selectIconFlex",
  "selectTittle": "Select-module__-xbVyW__selectTittle",
});
}}),
"[project]/src/app/Components/Select/Select.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/Components/Select/Select.module.css [app-client] (css module)");
;
;
;
function Select({ state, setState, option, optionDescription, icon }) {
    function handleChoose() {
        if (state === option) {
            setState("");
            return;
        } else {
            setState(option);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: state === option && !icon ? {
            backgroundColor: "#f5f3ff",
            border: "2px solid #a855f7",
            color: "#7e22ce"
        } : state === option && icon ? {
            backgroundColor: "#f5f3ff",
            border: "2px solid #a855f7",
            color: "#7e22ce",
            justifyContent: "flex-start"
        } : icon ? {
            justifyContent: "flex-start"
        } : {},
        onClick: handleChoose,
        className: state === "gender" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectGender : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].select,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: `${icon}.png`,
                alt: option,
                width: 40,
                height: 40
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Select/Select.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectIconFlex,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectTittle,
                        children: option
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Select/Select.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    optionDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].selectDescription,
                        children: optionDescription
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Select/Select.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/Select/Select.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/Select/Select.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Select;
const __TURBOPACK__default__export__ = Select;
var _c;
__turbopack_context__.k.register(_c, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Select/Select.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FormHistoryCreate() {
    _s();
    const [stepForm, setStepForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Quantos anos tem seu pequeno?");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Isso nos ajuda a escolher o vocabulário e temas perfeitos");
    const [icon, setIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("age");
    // Opções
    const [age, setAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [like, setLike] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [historyTipe, setHistoryTipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lesson, setLesson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FormHistoryCreate.useEffect": ()=>{
            switch(stepForm){
                case 1:
                    setTitle("Quantos anos tem seu pequeno?");
                    setDescription("Isso nos ajuda a escolher o vocabulário e temas perfeitos");
                    setIcon("age");
                    break;
                case 2:
                    setTitle("Qual público?");
                    setIcon("manWoman");
                    setDescription("Usaremos os pronomes e perspectiva corretos");
                    break;
                case 3:
                    setTitle("Do que sua criança gosta?");
                    setDescription("Escolha o que desperta a imaginação dela");
                    setIcon("like");
                    break;
                case 4:
                    setTitle("Que tipo de história vai ser?");
                    setDescription("Escolha o tipo de história que seu pequeno vai gostar");
                    setIcon("type");
                    break;
                case 5:
                    setTitle("Qual lição/assunto você quer ensinar?");
                    setDescription("Que mensagem importante eles devem aprender?");
                    setIcon("ensinar");
                    break;
                default:
                    setTitle("Quantos anos tem seu pequeno?");
                    setIcon("age");
                    break;
            }
        }
    }["FormHistoryCreate.useEffect"], [
        stepForm
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].formHistoryCreate,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].icon,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: `${icon}.svg`,
                    alt: title,
                    width: 80,
                    height: 80
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description,
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            stepForm === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: age,
                min: 0,
                max: 20,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].input,
                type: "number",
                onChange: (e)=>{
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) {
                        const numeric = parseInt(value, 10);
                        if (value === "" || numeric >= 0 && numeric <= 20) {
                            setAge(value);
                        }
                    }
                },
                placeholder: "Digite apenas números de 0 a 20",
                onKeyDown: (e)=>{
                    const allowedKeys = [
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab"
                    ];
                    if (!/^[0-9]$/.test(e.key) && !allowedKeys.includes(e.key)) {
                        e.preventDefault();
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            stepForm === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].genderFlex,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        state: gender,
                        setState: setGender,
                        option: "Menino"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        state: gender,
                        setState: setGender,
                        option: "Menina"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            stepForm === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mainFlex,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "animais",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "astronomia",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "oceano",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "dinossauros",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "princesa",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "arte",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "natureza",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "florestas",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "superherois",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                option: "carrinhos",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            option: "ciência",
                            state: like,
                            setState: setLike
                        }, void 0, false, {
                            fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 105,
                columnNumber: 9
            }, this),
            stepForm === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepFourFlex,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        icon: "engracado",
                        option: "Engracada e Boba",
                        optionDescription: "Risos e gargalhadas do início ao fim",
                        state: historyTipe,
                        setState: setHistoryTipe
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        icon: "aventura",
                        option: "Aventura e Emoção",
                        optionDescription: "Missões emocionantes e descobertas",
                        state: historyTipe,
                        setState: setHistoryTipe
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        icon: "calmo",
                        option: "Suave e Calmante",
                        optionDescription: "Pacífica e relaxante",
                        state: historyTipe,
                        setState: setHistoryTipe
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        icon: "magica",
                        option: "Mágica e Encantadora",
                        optionDescription: "Fantasia e mistério",
                        state: historyTipe,
                        setState: setHistoryTipe
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        icon: "educativo",
                        option: "Educativa e Aprendizado",
                        optionDescription: "Fatos divertidos e conhecimento",
                        state: historyTipe,
                        setState: setHistoryTipe
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 132,
                columnNumber: 9
            }, this),
            stepForm === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].contador,
                children: [
                    lesson.length,
                    " / 200"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 171,
                columnNumber: 9
            }, this),
            stepForm === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                maxLength: 200,
                minLength: 10,
                required: true,
                value: lesson,
                onChange: (e)=>setLesson(e.target.value),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].textArea,
                placeholder: "Conte mais sobre o que quer ensinar",
                rows: 5
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            stepForm === 1 && (age === "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customButton,
                type: "button",
                onClick: ()=>setStepForm(stepForm + 1),
                children: "Pular"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 188,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customButton,
                type: "button",
                onClick: ()=>setStepForm(stepForm + 1),
                children: "Continuar"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 196,
                columnNumber: 11
            }, this)),
            stepForm > 1 && stepForm < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flexButton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStepForm(stepForm - 1),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customButton,
                        type: "button",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    stepForm === 2 && gender === "" || stepForm === 3 && like === "" || stepForm === 4 && historyTipe === "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStepForm(stepForm + 1),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customButton,
                        type: "button",
                        children: "Pular"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStepForm(stepForm + 1),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customButton,
                        type: "button",
                        children: "Continuar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 224,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 205,
                columnNumber: 9
            }, this),
            stepForm === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flexButton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStepForm(stepForm - 1),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customButton,
                        type: "button",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].customButton,
                        type: "button",
                        children: "Criar história"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 235,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].stepFormDescription,
                children: [
                    "Passo ",
                    stepForm,
                    " de 5"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 248,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: `${stepForm * 20}%`
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].filledBar
                }, void 0, false, {
                    fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                    lineNumber: 250,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 249,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(FormHistoryCreate, "7rlKK906HNI9Fnm5lKUxb8f1KcY=");
_c = FormHistoryCreate;
const __TURBOPACK__default__export__ = FormHistoryCreate;
var _c;
__turbopack_context__.k.register(_c, "FormHistoryCreate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":true,"domains":["localhost"],"remotePatterns":[]}'))
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}}),
"[project]/node_modules/next/image.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_2c5077bf._.js.map