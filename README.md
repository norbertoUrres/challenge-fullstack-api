# Covid Checks - Challenge Fullstack - API

[API Link](https://api-covid-checks-e5kl6qshuq-uc.a.run.app/ "API Link") - Google Cloud Platform

## Métodos:

***GET** - /covid/checks*

Método para obtener los chequeos de COVID-19.

------------


***GET** - /covid/checks/:id*

Método para visualizar el detalle de un chequeo de COVID-19.

**Ejemplo: https://api-covid-checks-e5kl6qshuq-uc.a.run.app/covid/checks/60ea195375b08a000fff9c73**

------------


***GET** - /covid/search*

Método para filtrar los chequeos de COVID-19 (clave - valor).

**Ejemplo: https://api-covid-checks-e5kl6qshuq-uc.a.run.app/covid/search?key=country&value=Argentina**

------------


***GET** - /covid/countries*

Método para obtener un Array de países depurado de todos los chequeos de COVID-19.

------------


***GET** - /covid/stats*

Método para obtener la cantidad de chequeos sumarizando los resultados ("Sano", "Infectado" e "Inmune").

------------


***POST** - /covid/checks*

Método para crear un nuevo chequeo de COVID-19.

**Ejemplo:**
```json
{
	"name": "Daniel",
	"country": "Argentina",
	"dna": [ "ATGCGA", "CGGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG" ]
}
```

------------


***PUT** - /covid/checks/:id*

Método para actualizar un registro.

------------

***DELETE** - /covid/checks/:id*

Método para eliminar un registro.
