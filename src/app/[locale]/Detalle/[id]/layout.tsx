import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type { Metadata } from "next";
import "@/app/globals.css";



export const metadata: Metadata = {
  title: "Detalle del Pokémon - PokeApp",
  description: "Consulta información detallada de cada Pokémon: estadísticas, tipos, habilidades y otros datos relevantes de la primera generación.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function RootLayout({children, params}: Props) {

  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <div>
        {children}
    </div>
  );
}
