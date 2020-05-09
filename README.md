## Integracion de Django con React.

Primero que nada tenemos que generar el entorno virtual de python

```cmd
python -m venv .env
```

Activamos el entorno virtual 
```cmd
.env/Scripts/activate

```

Instalamos las dependencias de python para django
```cmd
cd backend
pip install -r requirements.txt
```

seguido vamos a la carpeta de frontend e instalamos las dependencias de react
```cmd
cd frontend
npm i
```

Compilamos el proyecto de react en la carpeta frontend
```cmd
npm build
```

Corremos django para eso entramos a la carpeta de backend y ejecutamos el siguiente comando

```cmd
python manage.py migrate
python manage.py collectstatic
python manage.py runserver
```

y ya deberiamos de estar viendo el front construido en react.

