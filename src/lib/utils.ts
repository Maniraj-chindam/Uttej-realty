export function formatPrice(price: number): string {
    if (price >= 10000000) {
        return `₹${(price / 10000000).toFixed(2)} Cr`;
    } else if (price >= 100000) {
        return `₹${(price / 100000).toFixed(0)} L`;
    }
    return `₹${price.toLocaleString('en-IN')}`;
}

export function scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ');
}
