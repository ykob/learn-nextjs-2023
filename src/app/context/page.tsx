import {
  ContextController,
  ContextReferences,
  ContextSummary,
  DemoProvider,
} from "@/src/features/context";

export default function ContextBody() {
  return (
    <DemoProvider>
      <main>
        <ContextSummary />
        <ContextController />
        <ContextReferences />
      </main>
    </DemoProvider>
  );
}
