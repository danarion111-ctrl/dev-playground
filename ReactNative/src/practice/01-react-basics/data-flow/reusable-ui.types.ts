export type ButtonVariant = 'primary' | 'secondary';

export interface ActionButtonProps {
    title: string;
    onPress: ()=> void;
    variant: ButtonVariant;
    disabled?: boolean;
}