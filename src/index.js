module.exports = { identificarBandeiraCartao };

const bandeiras = [
    { nome: "Visa", regex: /^4\d{15}$/ }, // Visa de 16 dígitos
    { nome: "MasterCard", regex: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[0-2]0)\d{12,19}/ },
    { nome: "Elo", regex: /^(4011|43(1[2-9]|89)|45(12|76|78)|50(4[1-9]|6[7-9]|9[0-9])|6062|6277|63(62|63)|65(00|[0-9]{2})|64[4-9])\d{10,16}/ },
    { nome: "American Express", regex: /^(34|37)\d{13}/ }, // AMEX tem 15 dígitos
    { nome: "Discover", regex: /^(6011|65|64[4-9])\d{12,15}/ },
    { nome: "Hipercard", regex: /^6062\d{10,13}/ },
    { nome: "Diners Club", regex: /^(30[0-5]|36|38|39)\d{11,14}/ },
    { nome: "JCB", regex: /^(31|35)\d{14}/ }, // JCB tem 16 dígitos
    { nome: "UnionPay", regex: /^(62|88)\d{14,17}/ },
    { nome: "Maestro", regex: /^(5018|5020|5038|5893|6304|6759|6761|6762|6763)\d{8,15}/ },
    { nome: "Mir", regex: /^220[0-4]\d{12}/ }, // Mir tem 16 dígitos
    { nome: "Troy", regex: /^9792\d{12}/ }, // Troy tem 16 dígitos
    { nome: "Verve", regex: /^(506|650)\d{13,16}/ }
];

function identificarBandeiraCartao(numeroCartao) {
    // Remove espaços e caracteres não numéricos
    numeroCartao = numeroCartao.replace(/\D/g, '');

    // Itera sobre as bandeiras para encontrar uma correspondência
    for (const bandeira of bandeiras) {
        if (bandeira.regex.test(numeroCartao)) {
            return bandeira.nome;
        }
    }

    // Caso não corresponda a nenhuma bandeira conhecida
    return "Bandeira desconhecida";
}

// Exemplo de uso
const numeroCartao = "4916195016675475"; // Visa de 16 dígitos
const bandeira = identificarBandeiraCartao(numeroCartao);
console.log(`O cartão pertence à bandeira: ${bandeira}`);