import pataDomestica from './assets/pata.png';
import pataSilvestre from './assets/pata-de-urso.png';
import pessoa from './assets/pessoa.png';
import seta from './assets/seta-direita.png';
import { CardType, cardStyles } from './CardConfig';

type CardProps = {
    type: CardType;
    title: string;
    count: number;
    onClick: () => void;
    showButton?: boolean;
};

const cardImages: Record<CardType, string> = {
    domestico: pataDomestica,
    silvestre: pataSilvestre,
    pessoas: pessoa,
};

export const Card = ({
    type,
    title,
    count,
    onClick,
    showButton = true
}: CardProps) => {
   
    const { gradientFrom, gradientTo } = cardStyles[type];
    const image = cardImages[type];
    
    function formatCount(count: number): string {
        if (count < 1000) return count.toString();
        if (count < 1_000_000) return (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + 'k';
        if (count < 1_000_000_000) return (count / 1_000_000).toFixed(count % 1_000_000 === 0 ? 0 : 1) + 'M';
        return (count / 1_000_000_000).toFixed(count % 1_000_000_000 === 0 ? 0 : 1) + 'B';
    }

    function getFontSizeClass(formattedCount: string): string {
        const length = formattedCount.length;
        if (length <= 3) return 'text-8xl';
        if (length === 4) return 'text-7xl';
        if (length === 5) return 'text-6xl';
        if (length === 6) return 'text-5xl';
        return 'text-4xl';
    }
    
    const formatted = formatCount(count);
    
    return (
        <div 
            className="w-80 h-40 rounded-lg p-3.5 flex justify-around items-center  "
            style={{
                backgroundImage: `linear-gradient(to bottom left, ${gradientFrom}, ${gradientTo})`
            }}
        >
        
            <div className="flex flex-col items-center">
                <p className="text-white font-bold text-lg mb-0">{title}</p>
                <p className={`text-white font-bold ${getFontSizeClass(formatted)}`}>
                {formatted}
                </p>
            </div>
            
            <div className='flex flex-col items-center justify-center'>

                <img src={image} alt={type} 
                    className=" w-26 h-26 "
                />
            
                {showButton && (
                    <div className='flex items-center justify-center gap-1'>
                    <button 
                        onClick={onClick}
                        className="text-white font-bold text-sm flex items-center cursor-pointer"
                    >
                    ver mais 
                    </button>
                        <img src={seta} alt="seta direita" className='w-3.5 h-3.5' />
                    </div>
                )}
            </div>
        </div>
    );
};