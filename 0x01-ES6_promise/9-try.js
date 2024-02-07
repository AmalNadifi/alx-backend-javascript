export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const returnValue = mathFunction();
    queue.push(returnValue);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
