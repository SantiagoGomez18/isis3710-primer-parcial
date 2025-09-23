import {useTranslations} from 'next-intl';

export default function Footer() {
    const t = useTranslations('HomePage');
    return (
        <footer>
            <div className = 'flex bg-[#11463B] p-4 justify-between -1'>
                <p className = 'text-white text-xs ml-10'>{t('footer')}</p>
                <p className = 'text-white text-xs mr-10'>{t('footer2')}</p>
            </div>
        </footer>
    );
}