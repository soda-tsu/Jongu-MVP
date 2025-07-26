module.exports = {

"[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

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
"[project]/src/app/Components/Select/Select.module.css [app-ssr] (css module)": ((__turbopack_context__) => {

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
"[project]/src/app/Components/Select/Select.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/Components/Select/Select.module.css [app-ssr] (css module)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        className: state === "gender" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectGender : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].select,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: `${icon}.png`,
                alt: option,
                width: 40,
                height: 40
            }, void 0, false, {
                fileName: "[project]/src/app/Components/Select/Select.jsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectIconFlex,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectTittle,
                        children: option
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/Select/Select.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    optionDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].selectDescription,
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
const __TURBOPACK__default__export__ = Select;
}}),
"[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/Components/Select/Select.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function FormHistoryCreate() {
    const [stepForm, setStepForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Quantos anos tem seu pequeno?");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Isso nos ajuda a escolher o vocabulário e temas perfeitos");
    const [icon, setIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("age");
    // Opções
    const [age, setAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [like, setLike] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [historyTipe, setHistoryTipe] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [lesson, setLesson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    }, [
        stepForm
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].formHistoryCreate,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].description,
                children: description
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            stepForm === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: age,
                min: 0,
                max: 20,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].input,
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
            stepForm === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].genderFlex,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        state: gender,
                        setState: setGender,
                        option: "Menino"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            stepForm === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainFlex,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                option: "animais",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                option: "oceano",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                option: "princesa",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                option: "natureza",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                option: "superherois",
                                state: like,
                                setState: setLike
                            }, void 0, false, {
                                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].duoFlex,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            stepForm === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepFourFlex,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$Select$2f$Select$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
            stepForm === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].contador,
                children: [
                    lesson.length,
                    " / 200"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 171,
                columnNumber: 9
            }, this),
            stepForm === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                maxLength: 200,
                minLength: 10,
                required: true,
                value: lesson,
                onChange: (e)=>setLesson(e.target.value),
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].textArea,
                placeholder: "Conte mais sobre o que quer ensinar",
                rows: 5
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 174,
                columnNumber: 9
            }, this),
            stepForm === 1 && (age === "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customButton,
                type: "button",
                onClick: ()=>setStepForm(stepForm + 1),
                children: "Pular"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 188,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customButton,
                type: "button",
                onClick: ()=>setStepForm(stepForm + 1),
                children: "Continuar"
            }, void 0, false, {
                fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                lineNumber: 196,
                columnNumber: 11
            }, this)),
            stepForm > 1 && stepForm < 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flexButton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStepForm(stepForm - 1),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customButton,
                        type: "button",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    stepForm === 2 && gender === "" || stepForm === 3 && like === "" || stepForm === 4 && historyTipe === "" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStepForm(stepForm + 1),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customButton,
                        type: "button",
                        children: "Pular"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStepForm(stepForm + 1),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customButton,
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
            stepForm === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].flexButton,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setStepForm(stepForm - 1),
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customButton,
                        type: "button",
                        children: "Voltar"
                    }, void 0, false, {
                        fileName: "[project]/src/app/Components/FormHistoryCreate/FormHistoryCreate.jsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].customButton,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stepFormDescription,
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bar,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: `${stepForm * 20}%`
                    },
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$Components$2f$FormHistoryCreate$2f$FormHistoryCreate$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].filledBar
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
const __TURBOPACK__default__export__ = FormHistoryCreate;
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
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
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/get-img-props.js [app-ssr] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/node_modules/next/dist/client/image-component.js [app-ssr] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-loader.js [app-ssr] (ecmascript)"));
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
"[project]/node_modules/next/image.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/image-external.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_e61159bd._.js.map