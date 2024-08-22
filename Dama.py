from os import system

def Voltar(Enunciado):
    while True:
        Voltar = Input_Int_Verificador(Enunciado + '\nDigite "1" para voltar\nR: ')

        if Voltar == 1:
            break

def Input_Int_Verificador(Enunciado):

    Verificador = input(Enunciado)

    Int = None

    if Verificador.isdigit():
        Int = int(Verificador)

    if Int is not None:
        return Int
    
def Verificador_Vitoria(Campos):
    Verificador_J1 = 0
    Verificador_J2 = 0
    Verificador_Vazio = 0
    
    for x in Campos:
        if Campos[x] == '□':
            Verificador_J1 += 1
        elif Campos[x] == '○':
            Verificador_J2 += 1
        elif Campos[x] == ' ':
            Verificador_Vazio += 1

        if Verificador_J1 == 8 and Verificador_Vazio == 24:
            return 1
        elif Verificador_J2 == 8 and Verificador_Vazio == 24:
            return 2
        else:
            return

def Ajustar_Coordenadas(Posicao):
    Letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    Numeros = ['1', '2', '3', '4', '5', '6', '7', '8']

    A = Posicao[0]
    B = Posicao[1]

    if A in Letras and B in Numeros:
        return Posicao
    else:
        return B+A

def Verificador_Posicao(Posicao, Campos, Jogador):
    Coordenadas1 = ['A2','A4','A6','A8','B1','B3','B5','B7','C2','C4','C6','C8','D1','D3','D5','D7','E2','E4','E6','E8','F1','F3','F5','F7','G2','G4','G6','G8','H1','H3','H5','H7']
    Coordenadas2 = ['2A','4A','6A','8A','1B','3B','5B','7B','2C','4C','6C','8C','1D','3D','5D','7D','2E','4E','6E','8E','1F','3F','5F','7F','2G','4G','6G','8G','1H','3H','5H','7H']

    if len(Posicao) != 2 and Posicao not in Coordenadas1 and Posicao not in Coordenadas2:
        return
    
    CoordenadasFinal = Ajustar_Coordenadas(Posicao)
    
    i = CoordenadasFinal.index(Posicao)

    if Campos[i] == ' ':
        return False
    elif (Campos[i] == '□' and Jogador == 1) or (Campos[i] == '○' and Jogador == 2):
        return True
    else:
        return False
    
def Verificador_Movimento(Posicao, Campos):
    ...

def Selecionar_Coordenadas(Numero_Jogador, Campos, Vitorias_J1, Vitorias_J2):
    system('cls')
    Placar = f'\n* Placar *\nJ1: {Vitorias_J1} x J2: {Vitorias_J2}'
    Layout = f'{Placar}\n\n    A   B   C   D   E   F   G   H\n  +---+---+---+---+---+---+---+---+\n1 ||||| {Campos[0]} ||||| {Campos[1]} ||||| {Campos[2]} ||||| {Campos[3]} |\n  +---+---+---+---+---+---+---+---+\n2 | {Campos[4]} ||||| {Campos[5]} ||||| {Campos[6]} ||||| {Campos[7]} |||||\n  +---+---+---+---+---+---+---+---+\n3 ||||| {Campos[8]} ||||| {Campos[9]} ||||| {Campos[10]} ||||| {Campos[11]} |\n  +---+---+---+---+---+---+---+---+\n4 | {Campos[12]} ||||| {Campos[13]} ||||| {Campos[14]} ||||| {Campos[15]} |||||\n  +---+---+---+---+---+---+---+---+\n5 ||||| {Campos[16]} ||||| {Campos[17]} ||||| {Campos[18]} ||||| {Campos[19]} |\n  +---+---+---+---+---+---+---+---+\n6 | {Campos[20]} ||||| {Campos[21]} ||||| {Campos[22]} ||||| {Campos[23]} |||||\n  +---+---+---+---+---+---+---+---+\n7 ||||| {Campos[24]} ||||| {Campos[25]} ||||| {Campos[26]} ||||| {Campos[27]} |\n  +---+---+---+---+---+---+---+---+\n8 | {Campos[28]} ||||| {Campos[29]} ||||| {Campos[30]} ||||| {Campos[31]} |||||\n  +---+---+---+---+---+---+---+---+\n'
    print(Layout)

    if Numero_Jogador == 1:
        Numero = 1
        Simbolo = '□'
    else:
        Numero = 2
        Simbolo = '○'

    Jogador = input(f'\n* VEZ DO JOGADOR NUMERO {Numero}({Simbolo}) *\nDigite as cordenadas da peça\nR: ')
    Jogador = Jogador.upper()
    Posicao = Verificador_Posicao(Jogador, Campos, 1)

    return [Posicao, Jogador]

def Movimentos(Campos, Selecionar_Coordenadas, Coordenadas):
    
    Posicao = Selecionar_Coordenadas[0]
    Jogador = Selecionar_Coordenadas[1]

    if Posicao == True:
        Coord1 = Jogador[0]
        Coord2 = int(Jogador[1])
        Referencia_Posicao = Coordenadas.index(Jogador)
        Possiveis_Movimento = []

        if Coord1 == ('B' or 'C' or 'D' or 'E' or 'F' or 'G') and Coord2 > 1 and Coord2 < 8:
            if Campos[Referencia_Posicao-3] == ' ':
                Possiveis_Movimento.append(Referencia_Posicao-3)
                
            if Campos[Referencia_Posicao-4] == ' ':
                Possiveis_Movimento.append(Referencia_Posicao+4)

            if Campos[Referencia_Posicao+3] == ' ':
                Possiveis_Movimento.append(Referencia_Posicao-3)
            
            if Campos[Referencia_Posicao+4] == ' ':
                Possiveis_Movimento.append(Referencia_Posicao+4)

            if len(Possiveis_Movimento) == 0:
                return 'Você não pode mexer esta peça!'

        elif Coord1 == 'A' or Coord1 == 'H':
            if Coord1 == 'A' and Coord2 == 8:
                if Campos[Referencia_Posicao-4] == ' ':
                    Possiveis_Movimento.append(Referencia_Posicao-4)
                else:
                    return 'Você não pode mexer esta peça!'
                
            elif Coord1 == 'H' and Coord2 == 1:
                if Campos[Referencia_Posicao+4] == ' ':
                    Possiveis_Movimento.append(Referencia_Posicao-4)
                else:
                    return 'Você não pode mexer esta peça!'
                
            else:
                if Campos[Referencia_Posicao-4] == ' ':
                    Possiveis_Movimento.append(Referencia_Posicao-4)

                if Campos[Referencia_Posicao+4] == ' ':
                    Possiveis_Movimento.append(Referencia_Posicao+4)
                
                if len(Possiveis_Movimento) == 0:
                    return 'Você não pode mexer esta peça!'
        
        elif Coord2 == 1:
            if Campos[Referencia_Posicao+4] == ' ':
                Possiveis_Movimento.append(Referencia_Posicao+4)

            if Campos[Referencia_Posicao+5] == ' ':
                Possiveis_Movimento.append(Referencia_Posicao+5)
            
            if len(Possiveis_Movimento) == 0:
                return 'Você não pode mexer esta peça!'
            
        elif Coord2 == 8:
            if Campos[Referencia_Posicao-4] == ' ':
                Possiveis_Movimento.append(Referencia_Posicao-4)

            if Campos[Referencia_Posicao-5] == ' ':
                Possiveis_Movimento.append(Referencia_Posicao-5)
            
            if len(Possiveis_Movimento) == 0:
                return 'Você não pode mexer esta peça!'
        
        return Possiveis_Movimento

    else:
        return 'Coordenadas invalidas!'

def Jogar_Amigo():
    ...


def Jogar_Sozinho():
 
    while True:
        system('cls')
        Vitorias_J1 = 0
        Vitorias_J2 = 0
        Placar = f'\n* Placar *\nJ1: {Vitorias_J1} x J2: {Vitorias_J2}'
        Campos = ['□','□','□','□','□','□','□','□',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','○','○','○','○','○','○','○','○']
        Layout = f'{Placar}\n\n    A   B   C   D   E   F   G   H\n  +---+---+---+---+---+---+---+---+\n1 ||||| {Campos[0]} ||||| {Campos[1]} ||||| {Campos[2]} ||||| {Campos[3]} |\n  +---+---+---+---+---+---+---+---+\n2 | {Campos[4]} ||||| {Campos[5]} ||||| {Campos[6]} ||||| {Campos[7]} |||||\n  +---+---+---+---+---+---+---+---+\n3 ||||| {Campos[8]} ||||| {Campos[9]} ||||| {Campos[10]} ||||| {Campos[11]} |\n  +---+---+---+---+---+---+---+---+\n4 | {Campos[12]} ||||| {Campos[13]} ||||| {Campos[14]} ||||| {Campos[15]} |||||\n  +---+---+---+---+---+---+---+---+\n5 ||||| {Campos[16]} ||||| {Campos[17]} ||||| {Campos[18]} ||||| {Campos[19]} |\n  +---+---+---+---+---+---+---+---+\n6 | {Campos[20]} ||||| {Campos[21]} ||||| {Campos[22]} ||||| {Campos[23]} |||||\n  +---+---+---+---+---+---+---+---+\n7 ||||| {Campos[24]} ||||| {Campos[25]} ||||| {Campos[26]} ||||| {Campos[27]} |\n  +---+---+---+---+---+---+---+---+\n8 | {Campos[28]} ||||| {Campos[29]} ||||| {Campos[30]} ||||| {Campos[31]} |||||\n  +---+---+---+---+---+---+---+---+\n'
        RED = '\033[31m'
        RESET = '\033[0m'


        while True:
            system('cls')
            print(Layout)
            Comecar = Input_Int_Verificador('\nDeseja começar o jogo?\n1- Sim, começar\n2- Não, voltar\nR: ')
            if Comecar == 1 or Comecar == 2:
                break

        if Comecar == 2:
            break

        while True:
            system('cls')
            Placar = f'\n* Placar *\nJ1: {Vitorias_J1} x J2: {Vitorias_J2}'
            Layout = f'{Placar}\n\n    A   B   C   D   E   F   G   H\n  +---+---+---+---+---+---+---+---+\n1 ||||| {Campos[0]} ||||| {Campos[1]} ||||| {Campos[2]} ||||| {Campos[3]} |\n  +---+---+---+---+---+---+---+---+\n2 | {Campos[4]} ||||| {Campos[5]} ||||| {Campos[6]} ||||| {Campos[7]} |||||\n  +---+---+---+---+---+---+---+---+\n3 ||||| {Campos[8]} ||||| {Campos[9]} ||||| {Campos[10]} ||||| {Campos[11]} |\n  +---+---+---+---+---+---+---+---+\n4 | {Campos[12]} ||||| {Campos[13]} ||||| {Campos[14]} ||||| {Campos[15]} |||||\n  +---+---+---+---+---+---+---+---+\n5 ||||| {Campos[16]} ||||| {Campos[17]} ||||| {Campos[18]} ||||| {Campos[19]} |\n  +---+---+---+---+---+---+---+---+\n6 | {Campos[20]} ||||| {Campos[21]} ||||| {Campos[22]} ||||| {Campos[23]} |||||\n  +---+---+---+---+---+---+---+---+\n7 ||||| {Campos[24]} ||||| {Campos[25]} ||||| {Campos[26]} ||||| {Campos[27]} |\n  +---+---+---+---+---+---+---+---+\n8 | {Campos[28]} ||||| {Campos[29]} ||||| {Campos[30]} ||||| {Campos[31]} |||||\n  +---+---+---+---+---+---+---+---+\n'

            '''JOGADOR NUMERO 1'''
            while True:
                Coordenadas = [ 'B1', 'D1', 'F1', 'H1','A2', 'C2', 'E2', 'G2','B3', 'D3', 'F3', 'H3','A4', 'C4', 'E4', 'G4','B5', 'D5', 'F5', 'H5','A6', 'C6', 'E6', 'G6','B7', 'D7', 'F7', 'H7','A8', 'C8', 'E8', 'G8' ]
                Coordenadas_Selecionadas = Selecionar_Coordenadas(1, Campos, Vitorias_J1, Vitorias_J2)
                Possiveis_Movimentos = Movimentos(Campos, Coordenadas_Selecionadas, Coordenadas)
                Posicao = Coordenadas_Selecionadas[0]

                if Possiveis_Movimentos == ("Coordenadas invalidas!" or "Você não pode mexer esta peça!"):
                    print(Voltar(Possiveis_Movimentos))
                    continue
                else:
                    break

            while True:
                system('cls')
                Placar = f'\n* Placar *\nJ1: {Vitorias_J1} x J2: {Vitorias_J2}'
                Index = Campos.index(Posicao)
                Campos[Index] = f'{RED}□{RESET}'
                Layout = f'{Placar}\n\n    A   B   C   D   E   F   G   H\n  +---+---+---+---+---+---+---+---+\n1 ||||| {Campos[0]} ||||| {Campos[1]} ||||| {Campos[2]} ||||| {Campos[3]} |\n  +---+---+---+---+---+---+---+---+\n2 | {Campos[4]} ||||| {Campos[5]} ||||| {Campos[6]} ||||| {Campos[7]} |||||\n  +---+---+---+---+---+---+---+---+\n3 ||||| {Campos[8]} ||||| {Campos[9]} ||||| {Campos[10]} ||||| {Campos[11]} |\n  +---+---+---+---+---+---+---+---+\n4 | {Campos[12]} ||||| {Campos[13]} ||||| {Campos[14]} ||||| {Campos[15]} |||||\n  +---+---+---+---+---+---+---+---+\n5 ||||| {Campos[16]} ||||| {Campos[17]} ||||| {Campos[18]} ||||| {Campos[19]} |\n  +---+---+---+---+---+---+---+---+\n6 | {Campos[20]} ||||| {Campos[21]} ||||| {Campos[22]} ||||| {Campos[23]} |||||\n  +---+---+---+---+---+---+---+---+\n7 ||||| {Campos[24]} ||||| {Campos[25]} ||||| {Campos[26]} ||||| {Campos[27]} |\n  +---+---+---+---+---+---+---+---+\n8 | {Campos[28]} ||||| {Campos[29]} ||||| {Campos[30]} ||||| {Campos[31]} |||||\n  +---+---+---+---+---+---+---+---+\n'
                
                print(Layout)
                print(f'Você selecionou a peça das coordenadas "{Posicao}", escolha a posição para qual ela deve ir\n')

                for i in enumerate(Possiveis_Movimentos):
            
                    print(f'{i+1}- {Coordenadas[Possiveis_Movimentos[i]]}')
                
                MovimentoX = Input_Int_Verificador('\nR: ')  

                if MovimentoX < 1 or MovimentoX > len(Possiveis_Movimentos):
                    Voltar('Opção invalida!')
                else:
                    MovimentoY = Campos.index(Possiveis_Movimentos[MovimentoX-1])
                    Campos[Index] = ' '
                    Campos[MovimentoY] = '□'
                    break

            Verificador_Vitoria(Campos)
        

def Main():
    while True:
        Menu = Input_Int_Verificador('\n* Menu Dama *\n1- Jogar Sozinho\n2- Jogar com um amigo\n3- Sair\nR: ')
        
        if Menu == 1:
            Jogar_Sozinho()
        elif Menu == 2:
            Jogar_Amigo()
        elif Menu == 3:
            print('\nJogo encerrado!')

Jogar_Sozinho()