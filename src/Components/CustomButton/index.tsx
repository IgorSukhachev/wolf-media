import { CustomButtonStyles } from '../../types/types';
import styles from './CustomButton.module.scss';

interface CustomButtonProps {
	text: string;
	style: CustomButtonStyles;
	width?: string;
	height?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, style, width, height }) => {
	return (
		<button
			className={`${styles.button} ${styles[style]}`}
			style={{ '--button-width': width, '--button-height': height } as React.CSSProperties}
		>
			{text}
		</button>
	);
};

export default CustomButton;
