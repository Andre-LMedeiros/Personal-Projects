import os

carros = [
            ("Chevrolet Tracker", 120),
            ("Chevrolet Onix", 90),
            ("Chevrolet Spin", 150),
            ("Hyundai HB20", 85),
            ("Hyundai Tucson", 120),
            ("Fiat Uno", 60),
            ("Fiat Mobi", 70),
            ("Fiat Pulse", 130),
    	]
alugados = []



def mostrar_lista_de_carros(lista_de_carros):
    for i, car in enumerate(lista_de_carros):
        """ print("[{}] {} - R$ {} /dia.".format(i, car[0], car[1])) """
        print(f'[{i}] {car[0]} - R$ {car[1]} /dia.')
        

while True:
    os.system('cls')
    print("==================================")
    print("Benvindos a Locadora de veiculos!")
    print("==================================")  
    print()
    print('>>> O que voce deseja fazer? <<<')
    print('0 - Mostrar portifolio | 1 - Alugar um carros  | 2 - Devolver um carro')
    op = int(input())
    
    os.system('cls')
    if op == 0:
        mostrar_lista_de_carros(carros)
    
    elif op == 1:
        mostrar_lista_de_carros(carros)
        print("==================================")
        print('Escolha o codigo do carro: ')
        cod_car = int(input())
        print("Qual o prazo para a locacao (em dias)? ")
        dias = int(input())
        os.system('cls')
        
        print(f'Voce escolheu {carros[cod_car][0]} por {dias} dias. Esta certo?')
        print('1 para SIM | 2 para NAO')
        
        if int(input()) == 1:
            print(f'O valor do aluguel para o periodo selecionado e R$ {dias*carros[cod_car][1]}. Deseja prosseguir?')
            print('1 para SIM | 2 para NAO')
            conf = int(input())
            
            if conf == 1:
                print(f'Voce alugou o {carros[cod_car][0]} por {dias} dias.')
                alugados.append(carros.pop(cod_car))
        
        else:
            continue
    
    elif op == 2:
        if len(alugados) == 0:
            print('Nao ha carros para serem devolvidos.')
        else:
            print('Segue a lista de carros alugados.  Qual voce deseja devolver?')
            mostrar_lista_de_carros(alugados)
            print()
            print('Escolha o codigo do carro que deseja devolver:')
            cod = int(input())
            
            if conf == 1:
                print(f'Obrigado por devolver o {alugados[cod][0]}.')
                carros.append(alugados.pop(cod))
    
    print("")
    print("==================================")
    print('0 para CONTINUAR | 1 para SAIR')
    if float(input()) == 1:
        break