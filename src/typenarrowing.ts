// ---------- 1. typeof narrowing ----------
function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai....`;
    }
    return `Chai order: ${kind}`;
}

// ---------- 2. optional parameter ----------
function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

// ---------- 3. literal + union ----------
function orderChai(size: "small" | "medium" | "large" | number) {

    if (size === "small") {
        return `Small cutting chai...`;
    }
    if (size === "medium" || size === "large") {
        return `Make extra chai`;
    }
    return `Chai order #${size}`;
}

// ---------- 4. class + instanceof ----------
class KulhadChai {
    serve() {
        return `Serving Kulhad chai`;
    }
}

class Cutting {
    serve() {
        return `Serving cutting chai`;
    }
}

function serve(chai: KulhadChai | Cutting) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
    if (chai instanceof Cutting) {
        return chai.serve();
    }
}

// ---------- 5. custom type guard ----------
type ChaiOrder = {
    type: string;
    sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    );
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with sugar level ${item.sugar}`;
    }
    return `Serving custom chai: ${item}`;
}

// ---------- 6. discriminated union ----------
type MasalaChai = { type: "masala"; spiceLevel: number };
type GingerChai = { type: "ginger"; amount: number };
type ElaichiChai = { type: "elaichi"; aroma: number };

type Chai = MasalaChai | GingerChai | ElaichiChai;

function makeChai(order: Chai) {
    switch (order.type) {

        case "masala":
            return `Masala chai with spice level ${order.spiceLevel}`;

        case "ginger":
            return `Ginger chai with amount ${order.amount}`;

        case "elaichi":
            return `Elaichi chai with aroma ${order.aroma}`;

        default:
            const _exhaustive: never = order;
            return _exhaustive;
    }
}

// ---------- 7. "in" operator narrowing ----------
function brew(order: MasalaChai | GingerChai) {

    if ("spiceLevel" in order) {
        return `Brewing masala chai with spice level ${order.spiceLevel}`;
    } 
    else {
        return `Brewing ginger chai with amount ${order.amount}`;
    }
}

// ---------- 8. unknown + type guard ----------
function isStringArray(arr: unknown): arr is string[] {

    if (!Array.isArray(arr)) {
        return false;
    }

    return arr.every(item => typeof item === "string");
}

// ---------- Testing ----------
console.log(getChai("ginger"));
console.log(getChai(5));

console.log(serveChai());
console.log(serveChai("elaichi"));

console.log(orderChai("small"));
console.log(orderChai(12));

console.log(serve(new KulhadChai()));
console.log(serve(new Cutting()));

console.log(serveOrder({ type: "masala", sugar: 2 }));
console.log(serveOrder("special"));

console.log(makeChai({ type: "masala", spiceLevel: 5 }));
console.log(makeChai({ type: "ginger", amount: 3 }));
console.log(makeChai({ type: "elaichi", aroma: 7 }));

console.log(brew({ type: "masala", spiceLevel: 4 }));

const data: unknown = ["chai", "coffee"];
if (isStringArray(data)) {
    console.log(data.join(" ☕ "));
}
