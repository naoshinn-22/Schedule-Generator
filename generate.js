// function generate() {
//     /* 数字と時間の対応
//      * indexは0始まりであることに留意 */
//     const TimetableMapA = [
//         "理科1", "英語1", "数学1", "家庭", "社会",
//         "国語", "理科1", "体育", "英語1", "社会",
//         "数学1", "英語2", "国語", "理科2", "社会",
//         "体育", "数学2", "数学1", "理科1", "国語",
//         "英語1", "音楽", "体育", "社会", "美術",
//         "総合",
//     ];
//     const TimetableMapB = [
//         "理科1", "英語1", "数学1", "技術", "社会",
//         "国語", "理科1", "体育", "英語1", "社会",
//         "数学1", "英語2", "国語", "理科2", "社会",
//         "体育", "数学2", "数学1", "理科1", "国語",
//         "英語1", "音楽", "体育", "社会", "美術",
//         "総合",
//     ]

//     const TimetableMapReverseA = {};
//     TimetableMapA.forEach((subject, index) => {
//         TimetableMapReverseA[subject] = index + 1;
//     });

//     const TimetableMapReverseB = {};
//     TimetableMapB.forEach((subject, index) => {
//         TimetableMapReverseB[subject] = index + 1;
//     });

//     let is_a = []; // trueならA、falseならB
//     let input_periods = Array.from(document.getElementsByClassName("input_periods"));
//     let input_values = input_periods.map(input_period => {
//         let value = input_period.value.trim();
//         const firstChar = value.charAt(0).toUpperCase(); // 最初の一文字を取得して大文字に変換
//         let processed_value = value;

//         if (firstChar === 'A' || firstChar === 'a') {
//             processed_value = value.substring(1).trim()
//             is_a.push(true);
//         } else if (firstChar === 'B' || firstChar === 'b') {
//             processed_value = value.substring(1).trim()
//             is_a.push(false);
//         }

//         const parsedValue = parseInt(processed_value);

//         if (!isNaN(parsedValue) && processed_value !== "" && processed_value !== undefined && processed_value !== null && processed_value !== "-1") {
//             return parsedValue; // 数字としてパースできた場合はその数値を返す
//         } else {
//             return processed_value; // 数字以外の場合は処理後の値を返す
//         }
//     });

//     let res = [];
//     input_values.forEach(value => {
//         if (is_a) { // aの場合
//             if (value === "-1" || value === undefined || value === "") {
//                 res.push("");
//             } else if (TimetableMapReverseA[value]) {
//                 res.push(value); // TimetableMap に存在する文字列ならそのまま使う
//             } else if (!isNaN(parseInt(value))) {
//                 const parsedValue = parseInt(value);
//                 if (parsedValue >= 1 && parsedValue <= TimetableMapA.length) {
//                     res.push(TimetableMapA[parsedValue - 1]); // パースできた数値が範囲内なら対応する科目を
//                 } else {
//                     res.push(""); // 範囲外の数値なら空文字
//                 }
//             } else {
//                 res.push(""); // それ以外は空文字
//             }
//         } else if (!is_a) { // bの場合
//             if (value === "-1" || value === undefined || value === "") {
//                 res.push("");
//             } else if (TimetableMapReverseB[value]) {
//                 res.push(value); // TimetableMap に存在する文字列ならそのまま使う
//             } else if (!isNaN(parseInt(value))) {
//                 const parsedValue = parseInt(value);
//                 if (parsedValue >= 1 && parsedValue <= TimetableMapB.length) {
//                     res.push(TimetableMapB[parsedValue - 1]); // パースできた数値が範囲内なら対応する科目を
//                 } else {
//                     res.push(""); // 範囲外の数値なら空文字
//                 }
//             } else {
//                 res.push(""); // それ以外は空文字
//             }
//         }
//     });

//     // 結果をアラートと対応するIDのinput要素に設定
//     for (let i = 0; i < res.length; i++) {
//         // alert(res[i]);
//         const targetInput = document.getElementById((i + 1).toString());
//         if (targetInput) {
//             targetInput.value = res[i];
//         } else {
//             console.warn(`ID "${i + 1}" の要素が見つかりません。`);
//         }
//     }
// }

function generate() {
    /* 数字と時間の対応
     * indexは0始まりであることに留意 */
    const TimetableMapA = [
        "理科1", "英語1", "数学1", "家庭", "社会",
        "国語", "理科1", "体育", "英語1", "社会",
        "数学1", "英語2", "国語", "理科2", "社会",
        "体育", "数学2", "数学1", "理科1", "国語",
        "英語1", "音楽", "体育", "社会", "美術",
        "総合",
    ];
    const TimetableMapB = [
        "理科1", "英語1", "数学1", "技術", "社会",
        "国語", "理科1", "体育", "英語1", "社会",
        "数学1", "英語2", "国語", "理科2", "社会",
        "体育", "数学2", "数学1", "理科1", "国語",
        "英語1", "音楽", "体育", "社会", "美術",
        "総合",
    ];

    const TimetableMapReverseA = {};
    TimetableMapA.forEach((subject, index) => {
        TimetableMapReverseA[subject] = index + 1;
    });

    const TimetableMapReverseB = {};
    TimetableMapB.forEach((subject, index) => {
        TimetableMapReverseB[subject] = index + 1;
    });

    let input_periods_data = Array.from(document.getElementsByClassName("input_periods")).map(input_period => {
        let value = input_period.value.trim();
        const firstChar = value.charAt(0).toUpperCase();
        let processed_value = value;
        let is_a_element = null;

        if (firstChar === 'A') {
            processed_value = value.substring(1).trim();
            is_a_element = true;
        } else if (firstChar === 'B') {
            processed_value = value.substring(1).trim();
            is_a_element = false;
        }

        const parsedValue = parseInt(processed_value);

        return {
            original_value: value,
            processed_value: processed_value,
            parsed_value: !isNaN(parsedValue) ? parsedValue : null,
            is_a: is_a_element
        };
    });

    let res = [];
    input_periods_data.forEach(data => {
        if (data.is_a === true) { // Aの場合
            if (data.processed_value === "-1" || data.processed_value === undefined || data.processed_value === "") {
                res.push("");
            } else if (TimetableMapReverseA[data.processed_value]) {
                res.push(data.processed_value);
            } else if (data.parsed_value !== null && data.parsed_value >= 1 && data.parsed_value <= TimetableMapA.length) {
                res.push(TimetableMapA[data.parsed_value - 1]);
            } else {
                res.push("");
            }
        } else if (data.is_a === false) { // Bの場合
            if (data.processed_value === "-1" || data.processed_value === undefined || data.processed_value === "") {
                res.push("");
            } else if (TimetableMapReverseB[data.processed_value]) {
                res.push(data.processed_value);
            } else if (data.parsed_value !== null && data.parsed_value >= 1 && data.parsed_value <= TimetableMapB.length) {
                res.push(TimetableMapB[data.parsed_value - 1]);
            } else {
                res.push("");
            }
        } else { // AでもBでもない場合（最初の文字がない、またはC以降）はそのまま表示
            res.push(data.original_value);
        }
    });

    // 結果をアラートと対応するIDのinput要素に設定
    for (let i = 0; i < res.length; i++) {
        // alert(res[i]);
        const targetInput = document.getElementById((i + 1).toString());
        if (targetInput) {
            targetInput.value = res[i];
        } else {
            console.warn(`ID "${i + 1}" の要素が見つかりません。`);
        }
    }
}
