export function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
export class LocalFilter {
    static filter(data, field, search, customFilter) {
        const filter = customFilter ? customFilter : filterValues;
        return data.filter((el) => {
            const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zZXJnZXkvcHJvZ3JhbS9uZzItc21hcnQtdGFibGUvcHJvamVjdHMvbmcyLXNtYXJ0LXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9saWIvZGF0YS1zb3VyY2UvbG9jYWwvbG9jYWwuZmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxZQUFZLENBQUMsS0FBYSxFQUFFLE1BQWM7SUFDeEQsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQ2xGLENBQUM7QUFFRCxNQUFNLE9BQU8sV0FBVztJQUV0QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQWdCLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxZQUF1QjtRQUNwRixNQUFNLE1BQU0sR0FBYSxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRXBFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQ3hCLE1BQU0sS0FBSyxHQUFHLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLFdBQVcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0RixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJWYWx1ZXModmFsdWU6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2gudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsRmlsdGVyIHtcblxuICBzdGF0aWMgZmlsdGVyKGRhdGE6IEFycmF5PGFueT4sIGZpZWxkOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nLCBjdXN0b21GaWx0ZXI/OiBGdW5jdGlvbik6IEFycmF5PGFueT4ge1xuICAgIGNvbnN0IGZpbHRlcjogRnVuY3Rpb24gPSBjdXN0b21GaWx0ZXIgPyBjdXN0b21GaWx0ZXIgOiBmaWx0ZXJWYWx1ZXM7XG5cbiAgICByZXR1cm4gZGF0YS5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBlbFtmaWVsZF0gPT09ICd1bmRlZmluZWQnIHx8IGVsW2ZpZWxkXSA9PT0gbnVsbCA/ICcnIDogZWxbZmllbGRdO1xuICAgICAgcmV0dXJuIGZpbHRlci5jYWxsKG51bGwsIHZhbHVlLCBzZWFyY2gpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=