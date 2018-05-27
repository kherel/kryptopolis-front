import { append } from "ramda";

export const preArticles = [
  {
    title: "Adres T",
    content:
      "(Dotyczy kryptowaluty Zcash)Adres transparentny, nie posiada ochrony prywatności zapewnionej przez" +
      " sygnaturę zk-snark. Poziomanonimowości adresów T, jest identyczny jak standardowych adresów Bitcoin. Tego typu" +
      " adresy zaczynają się zawsze od litery „t”"
  },
  {
    title: "Adres T",
    content:
      "(Dotyczy kryptowaluty Zcash)Adres transparentny, nie posiada ochrony prywatności zapewnionej" +
      " przezsygnaturę zk-snark. Poziomanonimowości adresów T, jest identyczny jak standardowych adresów Bitcoin. Tego typu adresy zaczynają się zawsze od litery „t”"
  },
  {
    title: "Adres Z",
    content:
      "(Dotyczy kryptowaluty zcash) Adres o wysokiej anonimowości – transakcje wysyłane z tego adresu są" +
      " chronione sygnaturami zk-snark. Tego typu adresy zawsze zaczynają się od litery „z”"
  },
  {
    title: "Aktywny Delegat",
    content:
      "Delegat który zdobył wystarczająco dużo głosów wśród społeczności i jest w rankingu top 101 wszystkich" +
      " delegatów. Taki delegat bierze udział w tworzeniu bloków i wydobywa nowe bloki.(opis dotyczy kryptowaluty Lisk )"
  },
  {
    title: "Algorytm",
    content:
      "Jest instrukcja postępowania, którego celem jest rozwiązanie zadania. Algorytm posiada opis danych" +
      " oraz opis czynności których wykonanie prowadzi do rozwiązania zadania w skończonym czasie"
  },
  {
    title: "AML",
    content:
      "Anti-Money Laundering Działania przeciwko praniu brudnych pieniędzy"
  },
  {
    title: "API",
    content:
      "Application Programming Interface Metoda komunikacji pomiędzy aplikacjami z użyciem prostych" +
      " instrukcji"
  },
  {
    title: "ASIC",
    content:
      "Application Specific Integrated Circuit Typ układów elektronicznych, które realizują ściśle" +
      " określone działania"
  },
  {
    title: "ATH",
    content:
      "( All Time High ) W kontekście kryptowalut oznacza ciągłe wzrosty cen."
  },
  {
    title: "BIP",
    content:
      "Bitcoin Improvement Proposal. Propozycja Usprawnienia Bitcoina - propozycjom dla lepszej" +
      " przejrzystości dodaje się numer oraz zamieszcza na oficjalnej liście https://github.com/bitcoin/bips"
  },
  {
    title: "Bitcoin Classic",
    content:
      "Jedna z propozycji zwiększenia przepustowości Bitcoin. Pierwotnie propozycja zwiększenia bloku" +
      " poprzez hard fork do 2MB, ze względu na brak wsparcia pośród minerów, klient Classic przeszedł na pełną politykę zgodności z klientem Bitcoin Unlimited i nie stanowi jużodrębnej propozycji zwiększenia rozmiaru bloku"
  },
  {
    title: "Bitcoin Core",
    content:
      "Klient Bitcoin zawierający całą bazę rachunkową Bitcoin tzw. Blockchain"
  },
  {
    title: "Bitcoin XT",
    content:
      "Jedna z propozycji zwiększenia przepustowości Bitcoin Podobnie jak Classic, był projektem" +
      " zwiększenia rozmiaru bloku poprzez hard fork - pierwotnie do 8 MB, później przeszedł na zgodność z klientem" +
      " Classic. Obecnie wydaje się, że klient XT nie jest już aktywnie rozwijany"
  },
  {
    title: "Bitoin Unlimited",
    content:
      "Jedna z propozycji zwiększenia przepustowości Bitcoin. Potocznie zwana BU. Klient Bitcoin Unlimited pozwala na swobodne ustawienie rozmiaru bloku, jednak nieposiada mechanizmu automatycznie wdrażającego hard fork. Jeżeli minerzy chcieliby zmienić rozmiar bloku przypomocy klienta Unlimited, muszą stworzyć porozumienie między sobą, na własną rękę"
  },
  {
    title: "Blockchain",
    content:
      "( Łańcuch Bloków ) <br>Zbiór rozproszonych ksiąg/ rozproszona baza danych. Wszystkie nowe informacje są zapisywane w coraz tonowych blokach, w którym każdy nowy zawiera skrócony ( hash ) zapis poprzedniego bloku oznaczonego dodatkowostemplem czasowym, tzw. timestamp. Nazwa Blockchain ( łańcuch bloków ) pochodzi szczególnego rodzaju zapisudanych, gdzie każdy blok tworzy kolejne ogniwo łańcucha i bez swojego poprzedniego ogniwa następne jestbezużyteczne- to właśnie najważniejszy atut Blockchain, czyli niepodważalność Blockchain."
  },
  {
    title: "BlockchainExplorer ",
    content:
      "Oprogramowanie najczęściej umieszczone na stronie internetowej, dzięki któremu możemy śledzić transakcjedanej kryptowaluty"
  },
  {
    title: "Blockchainhybrydowy",
    content:
      "Częściowo dostępny dla większej grupy odbiorców, np. w ramach różnych badań udostępniony dla uczelni lubwewnątrz firmy"
  },
  {
    title: "Blockchain prywanty",
    content:
      "Dostęp do niego mają tylko określone podmioty, tylko oni mogą go pobierać i udostępniać. Wykorzystywanyjest głównie w firmach, do celów komercyjnych, przechowywania poufnych danych itp"
  },
  {
    title: "Blockchain publiczny",
    content: "Każdy ma do niego dostęp, może go pobrać i udostępnić innym"
  },
  {
    title: "Blok",
    content:
      "Element tworzący łańcuch bloków tzw. Blockchain. Składa się z nagłówka oraz danych. Nagłówek zawiera" +
      " m.in. hash ( skrót ) poprzedniego bloku łańcucha oraz znacznik czasowy"
  },
  {
    title: "Breadwallet",
    content:
      "Mobilny lekki portfel Bitcoin wykorzystujący technologię HD, czyli działa w oparciu o tzw. seed"
  },
  {
    title: "Catapult ",
    content:
      "Nowa wersja NEM napisana w C++ w celu optymalizacji i zwiększenia przepustowości sieci o całe rzędy" +
      " wielkości. Dla porównania - Mijin potrafi przetworzyć&nbsp; 100 tx/s a średni wynik dla Catapult to ponad" +
      " 3000 tx/s. To wartości możliwe do uzyskania w prywatnych Blockchainach, ale przepustowość publicznego" +
      " Blockchaina NEM również się poprawi.&nbsp; Mijin przeszedł testy banków, ale Catapult będzie" +
      " nieporównywalnie lepszy. Trójczłonowa architektura (Klient -API - Serwer) zapewnia skalowalność i ustanowi" +
      " nowy standard w dziedzinie Blockchain"
  },
  {
    title: "CoinJoin",
    content:
      "Metoda poprawienia prywatności transakcji poprzez użycie zdecentralizowanego miksera monet" +
      " ukrywającego adresy pomiędzy którymi doszło do transakcji. Nie ukrywa jednak ilościowego przepływu środków" +
      " przez mikser co czasami pozwala wydedukować pewne informacje o przepływie środków"
  },
  {
    title: "Colored coin",
    content:
      "Token na bazie Blokckchaina (pierwotnie wyłącznie Bitcoina). Zasada działania opiera się na możliwości" +
      " śledzenia każdej frakcji monety teoretycznie w nieskończoność.Umawiając się że dana frakcja reprezentuje coś" +
      " innego np.certyfikat posiadania można stworzyć dowolne aktywo z centralnym emitentem"
  },
  {
    title: "Confidental Transactions",
    content:
      "Metoda poprawienia prywatności transakcji poprzez ukrycie ilości przesłanych środków - metoda ta nie" +
      " ukrywa jednak adresów"
  },
  {
    title: "CPFP",
    content:
      "Child Pays For Parent Metoda przyśpieszenia transakcji, która opiera się na tym, że kiedy jesteś" +
      " odbiorcą możesz wydać niepotwierdzone monety z opłatą priorytetową -powstaje łańcuch dwóch" +
      " niepotwierdzonych transakcji - miner chcąc potwierdzić tą z wysoką opłatą, musi też potwierdzić tą wcześniejszą z niską opłatą"
  },
  {
    title: "Cryptonight",
    content:
      "Algorytm (PoW - Proof of Work) charakteryzuje się wymaganiem szybkiego dostępu do pamięci" +
      " podręcznej w celu relatywnego zwiększenia skuteczności kopania CPU i utrudnienia tworzenia układów" +
      " ASIC dopasowanych do tego algorytmu - obecnie kopanie opiera się głównie na GPU, które obsługują" +
      " równolegle(choć relatywnie powoli) setki instancji na raz"
  },
  {
    title: "DAO",
    content:
      "Decentralized Autonomous" +
      " Organization Zdecentralizowana" +
      " Autonomiczna Organizacja jest przedsiębiorstwem działającym całkowicie na Blockchainie: zarządzanie nią &" +
      " nbsp; jest & nbsp; przejrzyste, finanse mogą być sprawdzone przez każdego, brak przestojów i awarii. ( nie" +
      " mylić z The DAO )"
  },
  {
    title: "DarkCoin",
    content:
      "Obecny DASH - dawniej nazywał Darkcoin, a jeszcze wcześniej XCoin (DASH/DRK/XCO)"
  },
  {
    title: "DashDrive",
    content:
      "System przechowywania plików w oparciu o blockchain DASH (projekt podobny do StorJ, Swarm, i kilku" +
      " innych)"
  }
];

export const articlesArr = preArticles.sort((a, b) => {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
});

export const articlesLetter = append(
  "all",
  Array.from(new Set(articlesArr.map(i => i.title.slice(0, 1))))
);
