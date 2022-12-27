const str = `
010-2749-9111
thejykoo@wemade.com
https://www.omdbapo.com/?apikey=7035c60c&s=frozen
The quick brown fox hppp http jumps ovre the lazy dog.
abccddddd
`;
// g flags i 대문자 소문자 구분 없이
// const regexp = new RegExp("the", "gi");

// const regexp = /\.$/gim;
// const regexp = /fox/gi;
// console.log(str.match(regexp));
// console.log(regexp.test(str));
// console.log(str.replace(regexp, "AAA"));
// console.log(str);

// const regexp = /\.$/gim;
// console.log(str.match(regexp));
let h = `
     the    hello    world    !`;
// console.log(str.match(/d$/gm));
console.log(str.match(/^t/gim));
console.log(str.match(/^T/gm));
console.log(str.match(/t|h/gim));
console.log(str.match(/th?/gim));
console.log(str.match(/h..p/g));
console.log(str.match(/fox|dog/g));
console.log(str.match(/https?/g));
console.log(str.match(/\b\w{2,3}\b/g));
console.log(str.match(/\w/g));
console.log(str.match(/\bf\w{1,}/g));
console.log(str.match(/\d/g));
console.log(h.replace(/\s/g, ""));
console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));
