export const checkPhone = (phone) => {
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{7,14}$/;
    const patternMatches = phoneRegex.test(phone);
    return patternMatches;
    ;
};
