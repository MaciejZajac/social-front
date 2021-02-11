Prosta aplikacja napisana w React, TypeScript, Ant.Design, StyledComponents.
BRAK REDUXA, użyłem Context API. Jedyne co potrzebuję w wielu miejscach to: dane zalogowanego użytkownika, więc Redux trochę nadmiarowy.

Serwer zaimplementowane:

-   rejestracja użytkownika typu firma. Użytkownik może dodawać oferty / aktualizować / usuwać.
-   możliwość edycji swojego konta.

Frontend zaimplementowano:

-   podstawowe widoki ofert + szczegółowa oferta,
-   panel użytkownika do zarządzania ofertami i kontem.
-   proste formularze dodawania/edycji oferty,
-   formularze rejestracji i logowania

DO ZROBIENIA:

-   przypominanie hasła
-   proces zakupu kredytów
-   możliwość zbierania sugestii od użytkownika (jakieś mały formularz w rogu ekranu).
-   stworzenie profilu pracodawcy na wzór justjoin.it

# do implementacji:

proces jak dokonywać zakupu oferty

możliwość kupienia "kredytów": 1 kredyt 1 zł - wykorzystać Stripe
użytkownik kupuje sobie np 10 kredytów do wykorzystania na 1 ofertę z pakiety "Podstawowy"
w zamian na udzielenie recenzji/znalezieniu buga w aplikacji dostanie na konto 5 kredytów.

Pierwsza oferta na portalu jest za darmo - pakiet testowy. Każda następna już jest płatna 50zł jedna.
W modelu użytkownika trzeba dodać informacje: ile ma kredytów, czy oferta testowa wygasła.
