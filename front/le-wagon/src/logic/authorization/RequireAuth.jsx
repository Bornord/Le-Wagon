import { useLocation, Navigate, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// Import de composants
// import { isAuthentifated } from '../features/user';

function RequireAuthorization() {
	//const user = useSelector((state) => state.user.value);
	const location = useLocation();
	// On vérifie que l'utilisateur est identifié.
	return true ? (
		<div>
			{/* S'il est identifié, on laisse le routage s'effectuer */}
			<Outlet />
		</div>
	) : (
		// Sinon, le le redirige vers une page de Login.
		<Navigate to={`/login`} state={{ from: location }} replace />
	);
}

export default RequireAuthorization;
