import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Info {
    nombres: string,
    appellidos: string,
    paralelo: number,
}

export default function Student( info: Info ) {
    return (
        <>
            <Typography component="p" variant="h4">
                
                {/* PENDIENTE: Renderice los props apellidos y nombres */}
                Nombre: {`${info.nombres} ${info.appellidos}`}
                
            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                {/* PENDIENTE: Renderice el paralelo */}
                Paralelo # {info.paralelo}

            </Typography>
        </>
    )
}
