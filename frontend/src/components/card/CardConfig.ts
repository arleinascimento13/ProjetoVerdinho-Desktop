export const colors = {
    VerdeEscuro: "#005011",
    VerdeClaro: "#13A934",
    CianoClaro: "#13A9A7",
    CianoEscuro: "#00504F",
};

export type CardType = "domestico" | "silvestre" | "pessoas";

export const cardStyles: Record<CardType, { 
    gradientFrom: string; 
    gradientTo: string;
}> = {
    domestico: {
        gradientFrom: colors.VerdeClaro,
        gradientTo: colors.VerdeEscuro,
    },
    silvestre: {
        gradientFrom: colors.VerdeClaro,
        gradientTo: colors.VerdeEscuro,
    },
    pessoas: {
        gradientFrom: colors.CianoClaro,
        gradientTo: colors.CianoEscuro,
    },
};