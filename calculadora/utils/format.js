export function sanitizeNumberString(s) {
    //mantem: digitos, um ponto e o sinaç do início
    if (!s) return "0";
    return s;
}

export function toNumber(displayText) {
    //display está formatado com separadores; removemos tudo que é dígito
    const raw = String(displayText).replace(/\./g, "").replace(/,/g, ".");
    const n = Number(raw) ;
    return Number.isFinite(n) ? n : NaN;
}

export function formatNumber(n, locale = "pt-BR"){
    if (!Number.isFinite(n)) return 'Erro';

    // evita floats infinitos na tela
    const fixed = fixFloat(n);

    // separar de milhar e decimal
    // máximo de casas: 10 para não estourar
    return new Intl.NumberFormat(locale,{
        maximumFractionDigits: 10,
    }).format(fixed);
}

export function fixFloat(n) {
    // reduz erro de ponto flutuante
    return Math.round((n + Number.EPSILON) * 1e12) / 1e12;
}
