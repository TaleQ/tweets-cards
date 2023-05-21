import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useUsers } from "../../hooks/useUsers";
import { useDispatch } from "react-redux";
import { changePage } from "../../redux/usersSlice";
import { showPage } from "../../redux/operations";

export const ItemsPagination = () => {
  const { totalNumber, page } = useUsers();
  const dispatch = useDispatch();
  const count = Math.ceil(totalNumber / 6);

  const handleChange = (_, value) => {
    dispatch(changePage(value));
    dispatch(showPage(value));
  };

  return (
    <Stack spacing={2}>
      {count ? (
        <Pagination count={count} page={page} onChange={handleChange} />
      ) : null}
    </Stack>
  );
};
