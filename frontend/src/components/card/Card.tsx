import React, { useEffect, useRef, useState } from "react";
import * as LucideIcons from "lucide-react"; // Importa todos os ícones
import "./Card.css";

interface CardProps {
	totalPets: number;
	CorDoCard: string; // ex: "bg-info"
	corDoTexto: string; // ex: "text-white"
	iconName: string; // Passando o nome do ícone como prop
}

// Função para escurecer e converter RGB → HEX
const rgbToDarkerHex = (rgb: string, factor = 0.8): string => {
	const result = rgb.match(/\d+/g);
	if (!result || result.length < 3) return "#000000";

	const [r, g, b] = result.map(Number);
	const darken = (value: number) => Math.max(0, Math.min(255, Math.floor(value * factor)));

	return (
		"#" +
		[darken(r), darken(g), darken(b)]
			.map((x) => x.toString(16).padStart(2, "0"))
			.join("")
			.toUpperCase()
	);
};

const Card: React.FC<CardProps> = ({ totalPets, CorDoCard, corDoTexto, iconName }) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const [iconColor, setIconColor] = useState<string>("");

	// Pegando o ícone dinâmicamente
	const Icon = LucideIcons[iconName as keyof typeof LucideIcons];

	useEffect(() => {
		if (cardRef.current) {
			const styles = getComputedStyle(cardRef.current);
			const bgColor = styles.backgroundColor;
			const darkerHex = rgbToDarkerHex(bgColor, 0.75); // 25% mais escuro
			setIconColor(darkerHex);
		}
	}, [CorDoCard]);

	return (
		<div ref={cardRef} className={`relative card ${CorDoCard} ${corDoTexto} border-0`}>
			<div className="card-body">
				<h4>{totalPets}</h4>
				<p>Total Pets</p>
			</div>
			<div className="card-footer border-0">
				<a href="#">More info</a>
			</div>
			{/* Usando o ícone dinâmico */}
			{Icon && <Icon className="imglogo" fill={iconColor} color={iconColor} size={48} />}
		</div>
	);
};

export default Card;
